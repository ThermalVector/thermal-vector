'use client';

import {
  Navbar as HeroNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: 'Каталог', href: '/catalog' },
    { name: 'О нас', href: '/about' },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <HeroNavbar
      onMenuOpenChange={setIsMenuOpen}
      className='bg-[#282828] border-none'
      position='sticky'
      maxWidth='full'
      height='4rem'
      isBordered={false}
    >
      {/* Mobile menu toggle */}
      <NavbarContent className='sm:hidden' justify='start'>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className='text-white'
        />
      </NavbarContent>

      {/* Logo */}
      <NavbarContent
        className='sm:justify-start justify-center'
        justify='center'
      >
        <NavbarBrand>
          <Link href='/' className='flex items-center gap-2'>
            <Image
              src='/logos/logo_normal.png'
              alt='Thermal Vector Logo'
              width={40}
              height={40}
              className='object-contain'
              priority
            />
            <span className='font-bold text-white text-xl hidden sm:block'>
              Thermal Vector
            </span>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {/* Desktop Navigation */}
      <NavbarContent className='hidden sm:flex gap-8' justify='center'>
        {menuItems.map((item) => (
          <NavbarItem key={item.name}>
            <Link
              href={item.href}
              className={`
                transition-colors duration-200 text-lg
                ${
                  isActive(item.href)
                    ? 'text-white font-semibold'
                    : 'text-gray-300 hover:text-white'
                }
              `}
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Empty right section */}
      <NavbarContent className='hidden sm:flex' justify='end'>
        <NavbarItem>{/* Placeholder for future content */}</NavbarItem>
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu className='bg-[#282828] pt-6'>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              href={item.href}
              className={`
                w-full py-3 text-lg block
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
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </HeroNavbar>
  );
}
