import Image from 'next/image'
import imgFa from '@/public/img/fa.png'
import imgFb from '@/public/img/fb.png'
import imgFc from '@/public/img/fc.png'
import imgFd from '@/public/img/fd.png'
import imgFe from '@/public/img/fe.png'
export default function Feature() {
  return (
    <section className='relative overflow-hidden px-4 py-20 md:px-20 text-center md:text-left bg-linear-to-b/oklch from-zinc-300 to-black/4'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center justify-center mb-18'>
          <p className='text-sm text-gray-500 flex mb-4 py-1 font-bold uppercase w-fit tracking-[0.25rem]'>
            Features
          </p>
          <h2 className='text-4xl md:text-5xl font-bold text-indigo-900 mb-8'>
            Performance at scale on your device
          </h2>
          <p className='text-xl text-gray-700'>
            Turn any device into a professional workstation with just a click.
          </p>
        </div>
        <article className=''>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mb-10'>
            <div className='bg-white p-8 flex flex-col items-center justify-center rounded-md border shadow-sm hover:shadow-lg transition-all duration-300'>
              <Image src={imgFa} alt='' width={300} height={300} />
              <h2 className='mb-3 mt-6 text-lg font-bold'>
                High Quality & Low Latency Streaming
              </h2>
              <p className='text-gray-600 text-justify'>
                Zeus Interactive Streaming Protocol provides up to 4K & 60FPS
                streaming with full-color support and brings zero latency
                experience with auto-adjusted streaming configurations.
              </p>
            </div>
            <div className='bg-white p-8 flex flex-col items-center justify-center rounded-md border shadow-sm hover:shadow-lg transition-all duration-300'>
              <Image src={imgFb} alt='' width={300} height={300} />
              <h2 className='mb-3 mt-6 text-lg font-bold'>
                RTX Enabled NVIDIA GPUs
              </h2>
              <p className='text-gray-600 text-justify'>
                As an official NVIDIA partner, Zeus makes the latest generation
                hardware accessible for all. Run your personal remote desktop
                with various performance alternatives with a single click.
              </p>
            </div>
            <div className='bg-white p-8 flex flex-col items-center justify-center rounded-md border shadow-sm hover:shadow-lg transition-all duration-300'>
              <Image src={imgFc} alt='' width={300} height={300} />
              <h2 className='mb-3 mt-6 text-lg font-bold'>
                Worldwide Coverage
              </h2>
              <p className='text-gray-600 text-justify'>
                Enjoy mobility with zero-latency performance from our 23+ data
                centers worldwide. No need to carry a professional workstation
                anymore. Go anywhere in the world, stay connected.
              </p>
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
            <div className='bg-white p-8 flex flex-col items-center justify-center rounded-md border shadow-sm hover:shadow-lg transition-all duration-3000'>
              <Image src={imgFd} alt='' width={300} height={300} />
              <h2 className='mb-3 mt-6 text-lg font-bold'>
                Encrypted Connection & Isolated Environments
              </h2>
              <p className='text-gray-600 text-justify'>
                Every Zeus computer is an isolated virtual machine and
                connection to your computer is encrypted and secured. Your data
                is under your control.
              </p>
            </div>
            <div className='bg-white p-8 flex flex-col items-center justify-center rounded-md border shadow-sm hover:shadow-lg transition-all duration-300'>
              <Image src={imgFe} alt='' width={300} height={300} />
              <h2 className='mb-3 mt-6 text-lg font-bold'>
                Use Any Device as a Workstation
              </h2>
              <p className='text-gray-600 text-justify'>
                A professional workstation in your pocket? Just an internet
                connection, and you re all set. Zeus desktop apps let you run
                your computer on any device.
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

//
