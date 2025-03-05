'use client'
import AutoScroll from 'embla-carousel-auto-scroll'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import golden from '@/public/slide/golden.png'
import natural from '@/public/slide/natural.png'
import primier from '@/public/slide/primier.png'
import royal from '@/public/slide/royal.png'
import whiskas from '@/public/slide/whiskas.png'
import nasa from '@/public/slide/nasa.png'
import decathlon from '@/public/slide/decathlon.jpg'


const brands = [

  { logo: decathlon },
  { logo: nasa },
  { logo: golden },
  { logo: natural },
  { logo: primier },
  { logo: royal },
  { logo: whiskas },
  { logo: golden },
  { logo: natural },
  { logo: primier },
  { logo: royal },
  { logo: whiskas },
  { logo: whiskas },
  { logo: golden },
  { logo: natural },
  { logo: primier },
  { logo: royal },
  { logo: whiskas },


];


export function Services() {

  const [emblaRef] = useEmblaCarousel({
    loop: true,


  }, [
    AutoScroll({ playOnInit: true, speed: 0.5, }),
  ]);

  return (
    <section className='relative overflow-hidden  bg-white'>
      <div className="relative">

        <div className='overflow-hidden' ref={emblaRef}>

          <div className="flex">
            {brands.map((item, index) => (
              <div key={index} className="flex-[0_0_calc(100%/4)] sm:flex-[0_0_calc(100%/5)] min-w-0 lg:flex-[0_0_calc(100%/10)] md:flex-[0_0_calc(100%/5)]">
                <article className='bg-white p-3 space-y-4 h-full flex flex-col '>
                  <div className='flex items-center justify-center'>
                    <div className='flex gap-3'>
                      <Image
                        src={item.logo}
                        alt='Brands'
                        width={100}
                        height={100}
                        className='object-contain'
                      >
                      </Image>

                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}