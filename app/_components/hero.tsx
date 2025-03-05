import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Browser, Chalkboard, Desktop } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'

export function Hero() {
  return (
    // <section className='relative overflow-hidden px-4 md:px-20 text-center md:text-left pt-30 pb-10 bg-conic-180 from-indigo-300 via-indigo-50 to-indigo-300'>
    <section className='relative overflow-hidden px-4 md:px-20 text-center md:text-left pt-30 pb-10 bg-linear-to-r from-sky-200 to-sky-100'>
      <div className='container mx-auto'>
        <article className='grid grid-cols-1 md:grid-cols-2 gap-10'>
          <div className='space-y-6'>
            <h1 className='text-3xl md:text-4xl lg:text-6xl font-bold text-gray-700'>
              {/* Run applications on any device, anywhere. */}
              Execute aplicativos em qualquer dispositivo, em qualquer lugar.
            </h1>
            <p className='text-lg  text-gray-600'>
              {/* Zeus brings the power of the cloud to your browser. */}
              Zeus traz o poder da nuvem para o seu navegador.
            </p>
          </div>

          <div className='flex flex-col md:items-end md:justify-end justify-center md:flex-row gap-4'>
            <Link
              href='#'
              className={cn(
                buttonVariants({ variant: 'default' }),
                'hover:bg-default transition-all duration-300 text-md py-5 border'
              )}
            >
              Try Zeus Now
            </Link>

            <Link
              href='#'
              className={cn(
                buttonVariants({ variant: 'secondary' }),
                'transition-all duration-300 text-md py-5 bg-transparent border border-gray-400'
              )}
            >
              Explore Solution
            </Link>
          </div>
        </article>
        <div className='flex items-center justify-between md:justify-normal gap-2 md:gap-4 mt-20'>
          <Link
            href='#'
            className='bg-white hover:bg-gray-100 border border-blue-600 rounded-md md:px-4 px-1 py-2 flex items-center justify-center gap-1 md:gap-2 text-blue-600 text-xs md:text-md font-semibold'
          >
            <Desktop size={20} />
            Cloud Computer
          </Link>
          <Link
            href='#'
            className='bg-white hover:bg-gray-100 transition-all duration-300 active border border-gray-300 rounded-md md:px-4 px-1 py-2 flex items-center justify-center gap-1 md:gap-2 text-gray-600 text-xs md:text-md font-semibold'
          >
            <Chalkboard size={20} />
            Team Workspace
          </Link>
          <Link
            href='#'
            className='bg-white hover:bg-gray-100 border border-gray-300 rounded-md md:px-4 px-1 py-2 flex items-center justify-center gap-1 md:gap-2 text-nblue text-xs font-semibold'
          >
            <Browser size={20} />
            Application Streaming
          </Link>
        </div>
      </div>
    </section>
  )
}
