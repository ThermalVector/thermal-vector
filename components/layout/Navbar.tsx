'use client';

import {
  Navbar as HeroNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const navbarRef = useRef<HTMLElement>(null);

  const menuItems = [
    { name: 'Каталог', href: '/catalog' },
    { name: 'О нас', href: '/about' },
    { name: 'Сравнить', href: '/comparator' },
  ];

  const isActive = (path: string) => pathname === path;

  // Handle scroll effect for better performance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <>
      <HeroNavbar
        ref={navbarRef}
        className={`
          bg-[#282828] border-none py-2 transition-all duration-200
          ${isScrolled ? 'shadow-lg' : ''}
        `}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transform: 'translateZ(0)',
        }}
        maxWidth='full'
        height='4rem'
        isBordered={false}
        shouldBlockScroll={false}
      >
        {/* Logo - left side */}
        <NavbarContent className='flex-1' justify='start'>
          <NavbarBrand>
            <Link href='/' className='flex items-center gap-2'>
              <Image
                src='/logos/logo_normal.png'
                alt='Thermal Vector Logo'
                width={120}
                height={40}
                className='object-contain h-10 w-auto'
                priority
              />
            </Link>
          </NavbarBrand>
        </NavbarContent>

        {/* Desktop Navigation */}
        <NavbarContent className='hidden lg:flex gap-8' justify='center'>
          {menuItems.map((item) => (
            <NavbarItem key={item.name}>
              <Link
                href={item.href}
                className={`
                  text-sm font-medium uppercase tracking-wide transition-colors duration-200
                  ${
                    isActive(item.href)
                      ? 'text-white border-b-2 border-white pb-1'
                      : 'text-gray-300 hover:text-white'
                  }
                `}
              >
                {item.name}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>

        {/* Mobile menu toggle */}
        <NavbarContent className='lg:hidden' justify='end'>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='text-white focus:outline-none'
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? (
              <XMarkIcon className='w-6 h-6' />
            ) : (
              <Bars3Icon className='w-6 h-6' />
            )}
          </button>
        </NavbarContent>

        {/* Empty spacer */}
        <NavbarContent className='hidden lg:flex' justify='end'>
          <NavbarItem />
        </NavbarContent>
      </HeroNavbar>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className='lg:hidden fixed bg-[#282828] border-t border-gray-700 overflow-y-auto'
          style={{
            top: '4rem',
            zIndex: 40,
            position: 'fixed',
            left: 0,
            right: 0,
            bottom: 0,
            height: 'calc(100vh - 4rem)',
            WebkitOverflowScrolling: 'touch', // Smooth scrolling on iOS
          }}
        >
          <div className='container mx-auto px-4 py-2'>
            {menuItems.map((item, index) => (
              <Link
                key={`${item.name}-${index}`}
                href={item.href}
                className={`
                  w-full py-4 px-2 text-base uppercase tracking-wide block border-b border-gray-700 last:border-none
                  ${
                    isActive(item.href)
                      ? 'text-white font-semibold'
                      : 'text-gray-300 hover:text-white'
                  }
                  transition-colors duration-200
                `}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
