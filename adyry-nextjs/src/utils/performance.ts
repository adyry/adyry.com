// Performance monitoring utilities
export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: Map<string, number[]> = new Map();

  static getInstance(): PerformanceMonitor {
    if (!this.instance) {
      this.instance = new PerformanceMonitor();
    }
    return this.instance;
  }

  startMeasure(name: string): void {
    performance.mark(`${name}-start`);
  }

  endMeasure(name: string): number {
    performance.mark(`${name}-end`);
    performance.measure(name, `${name}-start`, `${name}-end`);
    
    const measure = performance.getEntriesByName(name, 'measure')[0];
    const duration = measure?.duration || 0;
    
    // Store metric
    if (!this.metrics.has(name)) {
      this.metrics.set(name, []);
    }
    this.metrics.get(name)?.push(duration);
    
    // Clean up marks
    performance.clearMarks(`${name}-start`);
    performance.clearMarks(`${name}-end`);
    performance.clearMeasures(name);
    
    return duration;
  }

  getMetrics(name: string): { avg: number; min: number; max: number; count: number } | null {
    const values = this.metrics.get(name);
    if (!values || values.length === 0) return null;

    return {
      avg: values.reduce((a, b) => a + b, 0) / values.length,
      min: Math.min(...values),
      max: Math.max(...values),
      count: values.length
    };
  }

  getAllMetrics(): Record<string, { avg: number; min: number; max: number; count: number }> {
    const result: Record<string, { avg: number; min: number; max: number; count: number }> = {};
    
    for (const [name] of this.metrics) {
      const metrics = this.getMetrics(name);
      if (metrics) {
        result[name] = metrics;
      }
    }
    
    return result;
  }

  logMetrics(): void {
    const metrics = this.getAllMetrics();
    console.table(metrics);
  }

  clearMetrics(): void {
    this.metrics.clear();
  }
}

// Hook for measuring component performance
import { useEffect, useRef } from 'react';

interface PerformanceEventTiming extends PerformanceEntry {
  processingStart: number;
  startTime: number;
}

interface LayoutShiftEntry extends PerformanceEntry {
  hadRecentInput: boolean;
  value: number;
}

interface MemoryInfo {
  usedJSHeapSize: number;
  totalJSHeapSize: number;
  jsHeapSizeLimit: number;
}

export function usePerformanceMonitor(name: string) {
  const monitor = useRef(PerformanceMonitor.getInstance());
  const mountTime = useRef<number | undefined>(undefined);

  useEffect(() => {
    const currentMonitor = monitor.current;
    currentMonitor.startMeasure(`${name}-mount`);
    mountTime.current = performance.now();

    return () => {
      if (mountTime.current) {
        const unmountTime = performance.now();
        const totalTime = unmountTime - mountTime.current;
        currentMonitor.endMeasure(`${name}-mount`);
        
        // Log if component took too long to mount
        if (totalTime > 100) {
          console.warn(`Component ${name} took ${totalTime.toFixed(2)}ms to mount`);
        }
      }
    };
  }, [name]);

  const measureOperation = (operationName: string, operation: () => void | Promise<void>) => {
    const fullName = `${name}-${operationName}`;
    monitor.current.startMeasure(fullName);
    
    const result = operation();
    
    if (result instanceof Promise) {
      return result.finally(() => {
        monitor.current.endMeasure(fullName);
      });
    } else {
      monitor.current.endMeasure(fullName);
      return result;
    }
  };

  return { measureOperation, getMetrics: monitor.current.getMetrics.bind(monitor.current) };
}

// Web Vitals monitoring
export function measureWebVitals() {
  if (typeof window === 'undefined') return;

  // Measure Largest Contentful Paint
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (entry.entryType === 'largest-contentful-paint') {
        console.log('LCP:', entry.startTime);
      }
      if (entry.entryType === 'first-input') {
        const timing = entry as PerformanceEventTiming;
        console.log('FID:', timing.processingStart - timing.startTime);
      }
    }
  });

  observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input'] });

  // Measure Cumulative Layout Shift
  let clsValue = 0;
  const clsObserver = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      const layoutShift = entry as LayoutShiftEntry;
      if (!layoutShift.hadRecentInput) {
        clsValue += layoutShift.value;
      }
    }
  });

  clsObserver.observe({ entryTypes: ['layout-shift'] });

  // Log metrics after page load
  window.addEventListener('load', () => {
    setTimeout(() => {
      console.log('CLS:', clsValue);
      PerformanceMonitor.getInstance().logMetrics();
    }, 0);
  });
}

// Memory usage monitoring
export function monitorMemoryUsage() {
  if (typeof window === 'undefined' || !('memory' in performance)) return;

  const memory = (performance as { memory: MemoryInfo }).memory;
  const usage = {
    used: Math.round(memory.usedJSHeapSize / 1048576), // MB
    total: Math.round(memory.totalJSHeapSize / 1048576), // MB
    limit: Math.round(memory.jsHeapSizeLimit / 1048576) // MB
  };

  console.log('Memory Usage:', usage);
  
  if (usage.used / usage.limit > 0.8) {
    console.warn('High memory usage detected:', usage);
  }

  return usage;
}
