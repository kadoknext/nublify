'use client'
import Link from 'next/link'
import { useState } from 'react'
import imgLogo from '@/public/logo.png'
import Image from 'next/image'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  // Navigation items array
  const navItems = [
    { name: 'Products', href: '/products' },
    { name: 'Features', href: '/features' },
    { name: 'Use Cases', href: '/use-cases' },
    { name: 'Resources', href: '/resources' },
  ]

  return (
    <div>
      <nav className='block w-full max-w-screen px-4 lg:px-18 py-2 mx-auto bg-white bg-opacity-90 fixed top-0 shadow-lg backdrop-blur-lg backdrop-saturate-150 z-[9999]'>
        <div className='container flex flex-wrap items-center justify-between mx-auto text-slate-800'>
          <div className='flex items-center gap-x-10'>
            <Link
              href='/'
              className='mr-4 flex items-center gap-x-3 cursor-pointer py-1.5 text-default font-bold text-3xl'
            >
              <Image src={imgLogo} alt='Zeus' width={60} height={60} />
              ZEUS
            </Link>
            <div className='hidden lg:block'>
              <ul className='flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
                {navItems.map((item, index) => (
                  <li
                    key={index}
                    className='flex items-center p-1 text-lg gap-x-2 text-slate-600 font-bold hover:text-default-900'
                  >
                    <Link href={item.href} className='flex items-center'>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className='lg:hidden'>
            <button
              className='relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
              onClick={toggleMobileMenu}
              type='button'
            >
              <span className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-8 h-8'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M4 6h16M4 12h16M4 18h16'
                  ></path>
                </svg>
              </span>
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`fixed top-0 left-0 min-h-screen w-72 bg-slate-100 shadow-lg transform transition-transform duration-300 ease-in-out ${
              isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
            } lg:hidden z-50`}
          >
            <div className='flex flex-row items-center border-b pb-4'>
              <Link
                href='/'
                className='flex items-center gap-3 cursor-pointer text-default font-bold text-2xl pt-5 ps-4'
              >
                <Image src={imgLogo} alt='Zeus' width={50} height={50} />
                ZEUS
              </Link>

              <button
                onClick={toggleMobileMenu}
                className='absolute top-7 right-4 text-slate-600 hover:text-red-500'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-8 h-8'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              </button>
            </div>
            <ul className='flex flex-col h-full gap-4 p-4'>
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className='flex items-center p-1 text-lg gap-x-2 text-slate-600 hover:text-default-900'
                >
                  <Link href={item.href} className='flex items-center'>
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className='mt-4 flex flex-col gap-4 w-fit'>
                <Link
                  href='#'
                  className='px-8 py-2 bg-transparent font-semibold text-default border border-default rounded-md hover:outline-2 transition-all duration-300'
                >
                  Sign In
                </Link>

                <Link
                  href='#'
                  className='px-8 py-2 bg-default font-semibold text-white border border-default rounded-md hover:outline-2 hover:bg-default-900 transition-all duration-300'
                >
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>

          {/* Desktop Menu */}
          <div className='hidden lg:block'>
            <ul className='flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
              <li>
                <Link
                  href='#'
                  className='px-8 py-2 bg-transparent font-semibold text-default border border-default rounded-md hover:outline-2 transition-all duration-300'
                >
                  Sign In
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='px-8 py-2 bg-default font-semibold text-white border border-default rounded-md hover:outline-2 hover:bg-default-900 transition-all duration-300'
                >
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
