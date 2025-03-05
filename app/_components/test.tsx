'use client'
import AutoScroll from 'embla-carousel-auto-scroll';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image'
import golden from '@/public/slide/golden.png'
import natural from '@/public/slide/natural.png'
import primier from '@/public/slide/primier.png'
import royal from '@/public/slide/royal.png'
import whiskas from '@/public/slide/whiskas.png'


// import { Scissors, Syringe, CarTaxiFront, Hotel } from "lucide-react";



const brands = [
  { logo: golden },
  { logo: natural },
  { logo: primier },
  { logo: royal },
  { logo: whiskas },


]

// const services = [
//   {
//     title: "Banho & Tosa",
//     description:
//       "Inclui banho com produtos específicos para o tipo de pelagem e pele do animal, corte de unhas, limpeza das orelhas e tosa personalizada (higiênica ou estilizada).",
//     duration: "1h",
//     price: "$50",
//     icon: <Scissors />,
//     linkText:
//       "Olá, vi no site sobre Banho e tosa e gostaria de mais informações.",
//   },
//   {
//     title: "Consulta Veterinária",
//     description:
//       "Oferece atendimento clínico básico ou especializado para cuidar da saúde do animal. Inclui diagnóstico de doenças, aplicação de vacinas obrigatórias.",
//     duration: "1h",
//     price: "$45",
//     icon: <Syringe />,
//     linkText:
//       "Olá, vi no site sobre Consulta veterinária e gostaria de mais informações.",
//   },
//   {
//     title: "Táxi Pet",
//     description:
//       "Serviço de transporte para levar e buscar os pets no petshop, clínicas veterinárias ou outros locais. Ideal para tutores que não têm tempo ou transporte adequado para locomover os animais.",
//     duration: "2h",
//     price: "$80",
//     icon: <CarTaxiFront />,
//     linkText: "Olá, vi no site sobre Táxi Pet e gostaria de mais informações.",
//   },
//   {
//     title: "Hotel para pets",
//     description:
//       "Serviço de hospedagem para animais de estimação, ideal para quando os tutores precisam viajar ou se ausentar por alguns dias. Os pets ficam acomodados em espaços seguros, confortáveis.",
//     duration: "1h",
//     price: "$60",
//     icon: <Hotel />,
//     linkText:
//       "Olá, vi no site sobre Hotel para pets e gostaria de mais informações.",
//   },
//   {
//     title: "Hotel para pets",
//     description:
//       "Serviço de hospedagem para animais de estimação, ideal para quando os tutores precisam viajar ou se ausentar por alguns dias. Os pets ficam acomodados em espaços seguros, confortáveis.",
//     duration: "1h",
//     price: "$60",
//     icon: <Hotel />,
//     linkText:
//       "Olá, vi no site sobre Hotel para pets e gostaria de mais informações.",
//   },
//   {
//     title: "Hotel para pets",
//     description:
//       "Serviço de hospedagem para animais de estimação, ideal para quando os tutores precisam viajar ou se ausentar por alguns dias. Os pets ficam acomodados em espaços seguros, confortáveis.",
//     duration: "1h",
//     price: "$60",
//     icon: <Hotel />,
//     linkText:
//       "Olá, vi no site sobre Hotel para pets e gostaria de mais informações.",
//   },
//   {
//     title: "Hotel para pets",
//     description:
//       "Serviço de hospedagem para animais de estimação, ideal para quando os tutores precisam viajar ou se ausentar por alguns dias. Os pets ficam acomodados em espaços seguros, confortáveis.",
//     duration: "1h",
//     price: "$60",
//     icon: <Hotel />,
//     linkText:
//       "Olá, vi no site sobre Hotel para pets e gostaria de mais informações.",
//   },
//   {
//     title: "Hotel para pets",
//     description:
//       "Serviço de hospedagem para animais de estimação, ideal para quando os tutores precisam viajar ou se ausentar por alguns dias. Os pets ficam acomodados em espaços seguros, confortáveis.",
//     duration: "1h",
//     price: "$60",
//     icon: <Hotel />,
//     linkText:
//       "Olá, vi no site sobre Hotel para pets e gostaria de mais informações.",
//   },
//   {
//     title: "Hotel para pets",
//     description:
//       "Serviço de hospedagem para animais de estimação, ideal para quando os tutores precisam viajar ou se ausentar por alguns dias. Os pets ficam acomodados em espaços seguros, confortáveis.",
//     duration: "1h",
//     price: "$60",
//     icon: <Hotel />,
//     linkText:
//       "Olá, vi no site sobre Hotel para pets e gostaria de mais informações.",
//   },
//   {
//     title: "Hotel para pets",
//     description:
//       "Serviço de hospedagem para animais de estimação, ideal para quando os tutores precisam viajar ou se ausentar por alguns dias. Os pets ficam acomodados em espaços seguros, confortáveis.",
//     duration: "1h",
//     price: "$60",
//     icon: <Hotel />,
//     linkText:
//       "Olá, vi no site sobre Hotel para pets e gostaria de mais informações.",
//   },

//   {
//     title: "Hotel para pets",
//     description:
//       "Serviço de hospedagem para animais de estimação, ideal para quando os tutores precisam viajar ou se ausentar por alguns dias. Os pets ficam acomodados em espaços seguros, confortáveis.",
//     duration: "1h",
//     price: "$60",
//     icon: <Hotel />,
//     linkText:
//       "Olá, vi no site sobre Hotel para pets e gostaria de mais informações.",
//   },

// ];

export function Services() {



  const [emblaRef] = useEmblaCarousel({
    loop: true,


  }, [
    AutoScroll({ playOnInit: true, speed: 0.5, }),
  ]);

  return (
    <section className='relative overflow-hidden  bg-red-100'>

      {/* ---------------------------------------------- */}

      <div className="relative">

        <div className='overflow-hidden' ref={emblaRef}>


          <div className="flex">
            {brands.map((item, index) => (
              <div key={index} className="flex-[0_0_calc(100%/2)] min-w-0 lg:flex-[0_0_calc(100%/3)] xl:flex-[0_0_calc(100%/5)]">
                {/* ------------ARTICLE------------ */}
                <article className='bg-[#1e293d] text-white p-6 space-y-4 h-full flex flex-col'>

                  <div className='flex-1 flex items-start justify-between'>
                    <div className='flex gap-3'>
                      <span className='text-3xl'>{item.logo}</span>
                
                    </div>
                  </div>



                </article>

                {/* ------------ARTICLE------------ */}

              </div>
            ))}
          </div>



        </div>

      </div>


      {/* ----------------------------------------------------- */}

    </section>
  )
}