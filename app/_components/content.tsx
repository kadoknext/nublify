import Image from 'next/image'
import imga from '@/public/img/a.svg'
import imgb from '@/public/img/b.svg'
import imgc from '@/public/img/c.svg'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import Link from 'next/link'

export function Content() {
  return (
    <section className='relative overflow-hidden px-4 py-20 md:px-20 text-center md:text-left bg-[#eeefef]/80'>
      <div className='container mx-auto'>
        <div className='mb-18'>
          <h1 className='text-5xl font-semibold mb-6'>
            One solution for all your creative needs
          </h1>
          <p className='text-2xl font-semibold mb-10'>
            Future of work with the products designed for high performance &
            scalability.
          </p>
        </div>
        <article className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <Link href='#' className='group'>
            <div className='px-8 py-12 bg-[#eceef2] border group rounded-md shadow-sm hover:shadow-lg transition-all duration-300'>

              <div className='flex items-center justify-between'>

                <Image src={imga} alt='' width={120} height={120} />
                <HiOutlineArrowNarrowRight className='hidden group-hover:block text-3xl text-default' />
              </div>
              <h2 className=' mt-6 mb-6 text-2xl font-semibold text-default'>
                Cloud Computer
              </h2>
              <p className='text-md text-gray-700'>
                Personal remote desktop with latast geeration hardware eqipped
                scalable performance alternativa. Use any appliction without
                hardware barriers from your browser.
              </p>
            </div>
          </Link>
          <div className='px-8 py-12  bg-[#eeefef] border group rounded-md shadow-sm hover:shadow-lg transition-all duration-300'>
            <div className='flex items-center justify-between'>
              <Image src={imgb} alt='' width={120} height={120} />
              <HiOutlineArrowNarrowRight className='hidden group-hover:block text-3xl text-gray-800' />
            </div>
            <h2 className=' mt-6 mb-6 text-2xl font-semibold text-gray-800'>
              Team Workspaces
            </h2>
            <p className='text-md text-gray-800'>
              Personal remote desktop with latast geeration hardware eqipped
              scalable performance alternativa. Use any appliction without
              hardware barriers from your browser.
            </p>
          </div>
          <div className='px-8 py-12bg-[#ecf1f1]border group rounded-md shadow-sm hover:shadow-lg transition-all duration-300'>
            <div className='flex items-center justify-between'>
              <Image src={imgc} alt='' width={120} height={120} />
              <HiOutlineArrowNarrowRight className='hidden group-hover:block text-3xl text-sky-500' />
            </div>
            <h2 className=' mt-6 mb-6 text-2xl font-semibold text-sky-500'>
              Application Streaming
            </h2>
            <p className='text-md text-gray-700'>
              Personal remote desktop with latast geeration hardware eqipped
              scalable performance alternativa. Use any appliction without
              hardware barriers from your browser.
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}
