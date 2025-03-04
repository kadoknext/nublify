import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import imgZeus from '@/public/img/zeus.png'
import Image from 'next/image'
import Link from 'next/link'
import { GiCheckMark } from "react-icons/gi";

export default function Zeus() {
  return (
    <section className='relative overflow-hidden px-4 py-20 md:px-20 text-center md:text-left bg-linear-to-b/oklch from-indigo-100 to-teal-50'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center justify-center mb-18'>
          <p className='text-sm text-gray-500 flex mb-4 py-1 font-bold uppercase w-fit tracking-[0.25rem]'>
            Zeus cloud computer
          </p>
          <h2 className='text-4xl md:text-5xl font-bold text-indigo-900 mb-8'>
            Remote Desktop for Creatives, Gamers & Engineers
          </h2>
          <p className='text-xl text-gray-700'>
            Run graphic-intensive apps with latest generation hardware, step up
            your workflow with enhanced features.
          </p>
        </div>

        <article className=''>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mb-10'>
            <div className='w-fit h-[500px] rounded-lg overflow-hidden'>
              <Image src={imgZeus} alt='' style={{ width: '100%' }} />
            </div>
            <div className='pt-8'>
              <div className='flex flex-col px-8 space-y-10 text-gray-800 font-semibold'>
                <h2 className='text-3xl font-bold '>
                  Personal remote desktop just for you, and your creative needs
                </h2>
                <p>
                  Zeus Cloud Computer makes remote desktop experiences
                  accessible for everyone with 4K resolution and 60 FPS
                  streaming experience.
                </p>
                <p className='flex items-center gap-2'><GiCheckMark />  Secure, isolated and personal workspace</p>
                <p className='flex items-center gap-2'><GiCheckMark /> Ability to configure computer hardware on the go</p>
                <p className='flex items-center gap-2'><GiCheckMark /> Mobile & tablet device support, connect from any device</p>
                <div className='flex gap-4'>
                  <Link
                    href='#'
                    className={cn(
                      buttonVariants({ variant: 'default' }),
                      'hover:bg-default transition-all duration-300 text-md py-5 border'
                    )}
                  >
                    Try Zeus Computer Now
                  </Link>
                  <Link
                    href='#'
                    className={cn(
                      buttonVariants({ variant: 'secondary' }),
                      'transition-all duration-300 text-md py-5 bg-transparent border border-gray-400'
                    )}
                  >
                    Explore All Features
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
