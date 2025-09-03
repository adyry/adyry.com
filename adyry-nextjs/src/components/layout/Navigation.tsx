'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

const navItems: NavItem[] = [
  { label: 'dev', href: '/develop' },
  { label: 'music', href: '/music' },
  { label: 'photo', href: '/photos' },
  { label: 'adrian@adyry.com', href: 'mailto:adrian@adyry.com', isExternal: true },
];

export default function Navigation() {
  const pathname = usePathname();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const isActive = (href: string): boolean => {
    if (href === '/') return pathname === '/';
    return pathname === href;
  };

  const handleMouseEnter = (label: string) => {    
    setHoveredItem(label);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <div className="w-auto mt-4 p-0 flex flex-wrap gap-1 px-2 sm:px-4 h-[50px] items-end">
      {navItems.map((item) =>  (
          <Link
            key={item.label}
            href={item.href}
            className={`inline-block relative leading-8 text-black no-underline transition-all duration-200 rounded-t-md text-base px-2 sm:px-2.5 py-1.5 cursor-pointer ${isActive(item.href) ? 'font-bold h-[45px] bg-white/30' : 'h-[40px] bg-white/20'} hover:bg-[rgba(255,253,232,0.85)] hover:h-[45px]`}
            onMouseEnter={() => handleMouseEnter(item.label)}
            onMouseLeave={() => handleMouseLeave()}
            target={item.isExternal ? '_blank' : undefined}
          >
            {item.label}
          </Link>
        )
      )}
    </div>
  );
}
