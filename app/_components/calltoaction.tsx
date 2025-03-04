import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import callA from '@/public/img/call-a.png'
import callB from '@/public/img/call-b.png'
import Image from 'next/image'
import Link from 'next/link'
import imgLogo from '@/public/logo.png'
export default function CallToAction() {

  return (
    <section className='relative overflow-hidden px-4 text-center md:text-left bg-linear-to-b/oklch from-sky-200 to-black/5'>
      <div className='container mx-auto'>
        <article className="grid grid-cols-1 md:grid-cols-4 md:gap-x-10">
          <div className='md:flex md:flex-col  md:justify-start pt-10 md:pt-10 items-center justify-center hidden'>
            <Image src={callA} alt='' width={250} height={250} />
          </div>
          <div className='flex pt-10 items-center justify-center md:hidden'>
            <Image src={imgLogo} alt='' width={100} height={100} />
          </div>
          <div className="col-span-2  flex flex-col items-center justify-center text-center gap-4 py-10 md:py-25">
            <h2 className='text-4xl md:text-6xl font-bold text-indigo-900 mb-8'>Ready to focus on your creativity?</h2>
            <p className='text-lg md:text-xl text-gray-700'>Vagon gives you the ability to create & render projects, collaborate, and stream applications with the power of the best hardware.</p>
            <Link
              href='#'
              className={cn(
                buttonVariants({ variant: 'default' }),
                'hover:bg-default transition-all duration-300 text-md py-5 border w-fit mt-8'
              )}
            >
              Create a Zeus Account
            </Link>
          </div>
          {/* <div className='flex flex-col  md:justify-end  md:pb-10'> */}
          <div className='md:flex md:flex-col  md:justify-end md:pb-10 mt-10 md:mt-0 hidden items-center justify-center'>
            <Image src={callB} alt='' width={250} height={250} />
          </div>
        </article>


      </div>
    </section>
  )
}