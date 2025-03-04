'use client'
import Link from 'next/link'
import { useState } from 'react'
import imgLogo from '@/public/logo.png'
import Image from 'next/image'
import { Segundoli } from '@/app/_components/segundoli'
import { HiOutlineDesktopComputer } from 'react-icons/hi'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  // Navigation items array
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'News', href: '/news' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <div>
      <nav className='block w-full max-w-screen px-4 py-3.5 md:py-5 lg:px-8 mx-auto bg-white bg-opacity-90 fixed top-0 shadow-sm backdrop-blur-lg backdrop-saturate-150 z-[9999]'>
        <div className='container flex px-12 flex-wrap items-center justify-between mx-auto text-slate-800'>
          <div className='flex items-center gap-x-10'>
            <Link
              href='/'
              className='mr-4 flex items-center gap-x-3 cursor-pointer text-blue-600 font-bold text-2xl'
              // mr-4 flex text-center gap-x-3 cursor-pointer py-1.5 font-bold text-3xl
            >
              <Image src={imgLogo} alt='Zeus' width={40} height={40} />
              ZEUS
            </Link>
            <div className='hidden lg:block'>
              <ul className='flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
                <li className='relative group'>
                  <Link href='#' className=''>
                    Products
                  </Link>

                  <ul className='absolute w-6xl hidden group-hover:block rounded -left-43 offset-0 gap-2 shadow-2xl px-2 z-50 bg-white pb-8 transition-all duration-1000  rounded-b-lg'>
                    <li className=''>
                      <div className='grid grid-cols-4 gap-5'>
                        <div className=''>
                          <Link href='/23'>
                            <div className='hover:bg-blue-100 transition-all duration-300 p-4 rounded mt-10 hover:text-blue-600'>
                              <p

                                className='text-[10px] text-gray-500 flex mb-2 py-1 font-bold border-b-2 border-gray-400 uppercase w-fit tracking-[0.25rem]'
                              >
                                Individuals
                              </p>
                              <h2 className='font-bold text-lg'>
                                Remote Desktop & Cloud Computers for Individuals
                              </h2>

                              <div className='flex items-center justify-between gap-2 mt-5'>
                                <p className='uppercase text-xs flex items-center  hover:text-blue-600 text-gray-600 tracking-[0.15rem] gap-2'>
                                  <HiOutlineDesktopComputer />
                                  Computer
                                </p>

                                {/* <HiArrowNarrowRight className='text-gray-400 transition-all duration-300' /> */}
                              </div>
                            </div>
                          </Link>
                          <div>
                            <Link
                              href='#'
                              className=' hover:bg-blue-100 transition-all duration-300 p-4 rounded group flex items-center justify-between font-semibold'
                            >
                              <p>Features</p>
                              {/* <HiArrowNarrowRight className='text-gray-600 hover:text-blue-600  transition-all duration-300' /> */}
                            </Link>
                          </div>
                          <div>
                            <Link
                              href='#'
                              className=' hover:bg-blue-100 transition-all duration-300 p-4 rounded  flex items-center justify-between font-semibold'
                            >
                              <p>Pricing</p>
                              {/* <HiArrowNarrowRight className='text-gray-600 hover:text-blue-600 transition-all duration-300' /> */}
                            </Link>
                          </div>
                          <div>
                            <Link
                              href='#'
                              className=' hover:bg-blue-100 transition-all duration-300 p-4 rounded  flex items-center justify-between  font-semibold'
                            >
                              <p>Support & Help Center</p>
                              {/* <HiArrowNarrowRight className='text-gray-600 hover:text-blue-600 transition-all duration-300' /> */}
                            </Link>
                          </div>

                        </div>




                        <div>
                          <div>
                            <Link href='/23'>
                              <div className=' hover:bg-gray-100 transition-all duration-300 p-4 rounded mt-10 group'>
                                <p className='text-[10px] hover:text-blue-600 text-gray-500 flex mb-2 py-1 font-bold border-b-2 border-gray-400 uppercase w-fit tracking-[0.25rem]'>
                                  Teams
                                </p>
                                <h2 className='font-bold text-lg'>
                                  Secure Cloud Computers for Companies & Teams
                                </h2>

                                <div className='flex items-center justify-between gap-2 mt-5'>
                                  <p className='uppercase text-xs flex items-center  hover:text-blue-600 text-gray-600 tracking-[0.15rem] gap-2'>
                                    <HiOutlineDesktopComputer />
                                    Teams
                                  </p>

                                  {/* <HiArrowNarrowRight className='text-gray-600 hover:text-gray-700 transition-all duration-300' /> */}
                                </div>
                              </div>
                            </Link>
                            <div>
                              <Link
                                href='#'
                                className=' hover:bg-gray-100 transition-all duration-300 p-4 rounded group flex items-center justify-between font-semibold'
                              >
                                <p>Features</p>
                                {/* <HiArrowNarrowRight className='text-gray-600 hover:text-gray-700 transition-all duration-300' /> */}
                              </Link>
                            </div>
                            <div>
                              <Link
                                href='#'
                                className=' hover:bg-gray-100 transition-all duration-300 p-4 rounded  flex items-center justify-between font-semibold'
                              >
                                <p>Pricing</p>
                                {/* <HiArrowNarrowRight className='text-gray-600 hover:text-gray-700 transition-all duration-300' /> */}
                              </Link>
                            </div>
                            <div>
                              <Link
                                href='#'
                                className=' hover:bg-gray-100 transition-all duration-300 p-4 rounded  flex items-center justify-between font-semibold'
                              >
                                <p>Documentation</p>
                                {/* <HiArrowNarrowRight className='text-gray-600 hover:text-gray-700 transition-all duration-300' /> */}
                              </Link>
                            </div>

                          </div>
                        </div>
                        <div>
                          <div>
                            <div>
                              <Link href='#'>
                                <div className=' hover:bg-gray-100 transition-all duration-300 p-4 rounded mt-10 group'>
                                  <p
                                    className='text-[10px] hover:text-blue-600 text-gray-500 flex mb-2 py-1 font-bold border-b-2 border-gray-400 uppercase w-fit tracking-[0.25rem]'
                                  >
                                    Applications
                                  </p>
                                  <h2 className='font-bold text-lg'>
                                    Scalable Applications & Pixel Streaming
                                  </h2>

                                  <div className='flex items-center justify-between gap-2 mt-5'>
                                    <p className='uppercase text-xs flex items-center  hover:text-blue-600 text-gray-600 tracking-[0.15rem] gap-2'>
                                      <HiOutlineDesktopComputer />
                                      streams
                                    </p>

                                    {/* <HiArrowNarrowRight className='text-gray-600  hover:text-gray-700 transition-all duration-300' /> */}
                                  </div>
                                </div>
                              </Link>
                              <div>
                                <Link
                                  href='#'
                                  className=' hover:bg-gray-100 transition-all duration-300 p-4 rounded group flex items-center justify-between font-semibold'
                                >
                                  <p>Features</p>
                                  {/* <HiArrowNarrowRight className='text-gray-600 hover:text-gray-700 transition-all duration-300' /> */}
                                </Link>
                              </div>
                              <div>
                                <Link
                                  href='#'
                                  className=' hover:bg-gray-100 transition-all duration-300 p-4 rounded  flex items-center justify-between font-semibold'
                                >
                                  <p>Pricing</p>
                                  {/* <HiArrowNarrowRight className='text-gray-600 hover:text-gray-700 transition-all duration-300' /> */}
                                </Link>
                              </div>
                              <div>
                                <Link
                                  href='#'
                                  className=' hover:bg-gray-100  transition-all duration-300 p-4 rounded  flex items-center justify-between  font-semibold'
                                >
                                  <p>Documentation & APIs</p>
                                  {/* <HiArrowNarrowRight className='text-gray-600 hover:text-gray-700 transition-all duration-300' /> */}
                                </Link>
                              </div>
                              <div>
                                <Link
                                  href='#'
                                  className=' hover:bg-gray-100 transition-all duration-300 p-4 rounded  flex items-center justify-between font-semibold'
                                >
                                  <p>Demo Experiences</p>
                                  {/* <HiArrowNarrowRight className='text-gray-600 hover:text-gray-700 transition-all duration-300' /> */}
                                </Link>
                              </div>

                            </div>
                          </div>
                        </div>
                        <div>
                          {' '}
                          <div>
                            <Link
                              href='#'>
                              <div className=' hover:bg-gray-100 transition-all duration-300 p-4 rounded mt-10 group'>
                                <p className='text-[10px] hover:text-blue-600 text-gray-500 flex mb-2 py-1 font-bold border-b-2 border-gray-400 uppercase w-fit tracking-[0.25rem]'>
                                  Virtua reality
                                </p>
                                <h2 className='font-bold text-lg'>
                                  VR & AR Experience Streaming Solutions
                                </h2>

                                <div className='flex items-center justify-between gap-2 mt-5'>
                                  <p className='uppercase text-xs flex items-center  hover:text-blue-600 text-gray-600 tracking-[0.15rem] gap-2'>
                                    <HiOutlineDesktopComputer />
                                    Virtual reality
                                  </p>

                                  {/* <HiArrowNarrowRight className='text-gray-600  hover:text-gray-700 transition-all duration-300' /> */}
                                </div>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>

                <li className='relative group transition-all duration-1000'>
                  <Link href='#' className=''>
                    Features
                  </Link>

                  <ul className='absolute w-6xl hidden  group-hover:block rounded -left-65 offset-0 gap-2 shadow-2xl px-2 z-50 bg-white pb-8 transition-all duration-300'>
                    <li className=''>
                      <Segundoli />
                    </li>
                  </ul>
                </li>

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
            className={`fixed top-0 left-0 min-h-screen w-64 bg-slate-100 shadow-lg transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
              } lg:hidden z-50`}
          >
            <div className='flex flex-row items-center border-b pb-4'>
              <Link
                href='/'
                className='flex items-center gap-3 cursor-pointer text-blue-600 font-bold text-xl pt-4 ps-4'
              >
                <Image src={imgLogo} alt='Zeus' width={40} height={40} />
                ZEUS
              </Link>

              <button
                onClick={toggleMobileMenu}
                className='absolute top-4 right-4 text-slate-600 hover:text-red-500'
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
                  className='flex items-center p-1 text-lg gap-x-2 text-slate-600 hover:text-blue-500'
                >
                  <Link href={item.href} className='flex items-center'>
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className='mt-4 flex flex-col gap-4 w-fit'>
                <Link
                  href='#'
                  className='px-8 py-2 bg-transparent font-semibold text-blue-400 border border-blue-400 rounded-md hover:outline-2 transition-all duration-300'
                >
                  Sign In
                </Link>

                <Link
                  href='#'
                  className='px-8 py-2 bg-blue-400 font-semibold text-white border border-blue-400 rounded-md hover:outline-2 hover:bg-blue-500 transition-all duration-300'
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
                  className='px-8 py-2 bg-transparent font-semibold text-blue-400 border border-blue-400 rounded-md hover:outline-2 transition-all duration-300'
                // className=' text-lg hover:text-slate-600 text-blue-500 uppercase font-semibold transition-all duration-300'
                >
                  Sign In
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='px-8 py-2 bg-blue-400 font-semibold text-white border border-blue-400 rounded-md hover:outline-2 hover:bg-blue-500 transition-all duration-300'
                // className=' text-lg text-slate-600 hover:text-blue-500 uppercase font-semibold transition-all duration-300'
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
