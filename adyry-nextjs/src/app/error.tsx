'use client';

import Link from 'next/link';
import ContentContainer from '../components/layout/ContentContainer';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main>
      <ContentContainer>
        <div style={{ 
          textAlign: 'center', 
          padding: '40px 20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px'
        }}>
          <h2 style={{ 
            color: '#dc2626', 
            margin: 0,
            fontSize: '24px'
          }}>
            Something went wrong!
          </h2>
          
          <p style={{ 
            color: 'rgba(0, 0, 0, 0.7)',
            margin: 0,
            maxWidth: '400px',
            lineHeight: '1.5'
          }}>
            We encountered an unexpected error. Please try again or go back to the home page.
          </p>

          {process.env.NODE_ENV === 'development' && (
            <details style={{ 
              marginTop: '20px',
              padding: '10px',
              backgroundColor: 'rgba(255, 0, 0, 0.1)',
              borderRadius: '4px',
              fontSize: '14px',
              fontFamily: 'monospace'
            }}>
              <summary>Error Details (Development)</summary>
              <pre style={{ margin: '10px 0 0 0', whiteSpace: 'pre-wrap' }}>
                {error.message}
              </pre>
            </details>
          )}
          
          <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
            <button
              onClick={reset}
              style={{
                padding: '10px 20px',
                backgroundColor: 'rgba(255, 253, 232, 0.68)',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '14px',
                transition: 'background-color 0.2s'
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.backgroundColor = 'rgba(255, 253, 232, 0.85)';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.backgroundColor = 'rgba(255, 253, 232, 0.68)';
              }}
            >
              Try again
            </button>
            
            <Link 
              href="/"
              style={{
                padding: '10px 20px',
                backgroundColor: 'rgba(255, 253, 232, 0.68)',
                border: 'none',
                borderRadius: '4px',
                textDecoration: 'none',
                color: 'black',
                fontSize: '14px',
                transition: 'background-color 0.2s',
                display: 'inline-block'
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.backgroundColor = 'rgba(255, 253, 232, 0.85)';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.backgroundColor = 'rgba(255, 253, 232, 0.68)';
              }}
            >
              Go Home
            </Link>
          </div>
        </div>
      </ContentContainer>
    </main>
  );
}
