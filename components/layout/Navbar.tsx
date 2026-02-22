'use client';

import {
  Navbar as HeroNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import {
  Bars3Icon,
  XMarkIcon,
  HomeIcon,
  CubeIcon,
  UsersIcon,
  ScaleIcon,
} from '@heroicons/react/24/outline';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const pathname = usePathname();
  const router = useRouter();
  const menuRef = useRef<HTMLDivElement>(null);
  const navbarRef = useRef<HTMLElement>(null);

  const menuItems = [
    { name: 'Каталог', href: '/catalog', icon: CubeIcon },
    { name: 'О нас', href: '/about', icon: UsersIcon },
    { name: 'Сравнить', href: '/comparator', icon: ScaleIcon },
  ];

  const isActive = (path: string) => pathname === path;

  // Close menu when pathname changes (new page loaded)
  useEffect(() => {
    setIsMenuOpen(false);
    setIsNavigating(false);
  }, [pathname]);

  // Handle navigation
  const handleNavigation = (href: string) => {
    if (isNavigating) return;

    // If we're already on this page, just close the menu
    if (pathname === href) {
      setIsMenuOpen(false);
      return;
    }

    setIsNavigating(true);
    // Keep menu open during navigation
    router.push(href);
  };

  // Get navbar height after render
  useEffect(() => {
    if (navbarRef.current) {
      setNavbarHeight(navbarRef.current.offsetHeight);
    }

    const handleResize = () => {
      if (navbarRef.current) {
        setNavbarHeight(navbarRef.current.offsetHeight);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen && !isNavigating) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.overflow = 'hidden';
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.overflow = '';

      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }

    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.overflow = '';
    };
  }, [isMenuOpen, isNavigating]);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        !isNavigating &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen, isNavigating]);

  return (
    <>
      <HeroNavbar
        ref={navbarRef}
        className={`
          bg-[#282828] border-none transition-all duration-200
          ${isScrolled ? 'shadow-lg' : ''}
          px-8 py-3
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
        height='auto'
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
            disabled={isNavigating}
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

      {/* Mobile Menu - No gap */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className='lg:hidden fixed bg-[#1e1e1e] z-40'
          style={{
            top: navbarHeight ? `${navbarHeight}px` : '64px',
            left: 0,
            right: 0,
            bottom: 0,
            height: navbarHeight
              ? `calc(100vh - ${navbarHeight}px)`
              : 'calc(100vh - 64px)',
            overflowY: 'auto',
            pointerEvents: isNavigating ? 'none' : 'auto',
            opacity: isNavigating ? 0.7 : 1,
            transition: 'opacity 0.2s ease',
          }}
        >
          <div className='flex flex-col h-full'>
            <div className='flex-1 container mx-auto px-4 py-6'>
              {/* Home link with icon */}
              <button
                onClick={() => handleNavigation('/')}
                disabled={isNavigating}
                className={`
                  w-full py-5 px-4 text-lg uppercase tracking-wide block mb-2
                  ${
                    isActive('/')
                      ? 'text-white font-semibold bg-gray-700/50 rounded-lg'
                      : 'text-gray-300 hover:text-white hover:bg-gray-700/30 rounded-lg'
                  }
                  transition-all duration-200 flex items-center gap-3
                  ${isNavigating && pathname !== '/' ? 'cursor-wait opacity-50' : 'cursor-pointer'}
                `}
              >
                <HomeIcon className='w-5 h-5' />
                <span>Главная</span>
              </button>

              {/* Menu items with icons */}
              {menuItems.map((item, index) => {
                const Icon = item.icon;
                const isCurrentPage = isActive(item.href);
                return (
                  <button
                    key={`${item.name}-${index}`}
                    onClick={() => handleNavigation(item.href)}
                    disabled={isNavigating && !isCurrentPage}
                    className={`
                      w-full py-5 px-4 text-lg uppercase tracking-wide block mb-2
                      ${
                        isCurrentPage
                          ? 'text-white font-semibold bg-gray-700/50 rounded-lg'
                          : 'text-gray-300 hover:text-white hover:bg-gray-700/30 rounded-lg'
                      }
                      transition-all duration-200 flex items-center gap-3
                      ${isNavigating && !isCurrentPage ? 'cursor-wait opacity-50' : 'cursor-pointer'}
                    `}
                  >
                    <Icon className='w-5 h-5' />
                    <span>{item.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Optional footer in mobile menu */}
            <div className='p-4 border-t border-gray-800'>
              <p className='text-sm text-gray-400 text-center'>
                © 2026 Thermal Vector
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
