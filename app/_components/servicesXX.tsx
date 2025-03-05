'use client'
import AutoScroll from 'embla-carousel-auto-scroll';
import useEmblaCarousel from 'embla-carousel-react'
  ;
import { Scissors, Syringe, CarTaxiFront, Hotel, Clock } from "lucide-react";

const services = [
  {
    title: "Banho & Tosa",
    description:
      "Inclui banho com produtos específicos para o tipo de pelagem e pele do animal, corte de unhas, limpeza das orelhas e tosa personalizada (higiênica ou estilizada).",
    duration: "1h",
    price: "$50",
    icon: <Scissors />,
    linkText:
      "Olá, vi no site sobre Banho e tosa e gostaria de mais informações.",
  },
  {
    title: "Consulta Veterinária",
    description:
      "Oferece atendimento clínico básico ou especializado para cuidar da saúde do animal. Inclui diagnóstico de doenças, aplicação de vacinas obrigatórias.",
    duration: "1h",
    price: "$45",
    icon: <Syringe />,
    linkText:
      "Olá, vi no site sobre Consulta veterinária e gostaria de mais informações.",
  },
  {
    title: "Táxi Pet",
    description:
      "Serviço de transporte para levar e buscar os pets no petshop, clínicas veterinárias ou outros locais. Ideal para tutores que não têm tempo ou transporte adequado para locomover os animais.",
    duration: "2h",
    price: "$80",
    icon: <CarTaxiFront />,
    linkText: "Olá, vi no site sobre Táxi Pet e gostaria de mais informações.",
  },
  {
    title: "Hotel para pets",
    description:
      "Serviço de hospedagem para animais de estimação, ideal para quando os tutores precisam viajar ou se ausentar por alguns dias. Os pets ficam acomodados em espaços seguros, confortáveis.",
    duration: "1h",
    price: "$60",
    icon: <Hotel />,
    linkText:
      "Olá, vi no site sobre Hotel para pets e gostaria de mais informações.",
  },
];

export function Services() {

  

  const [emblaRef] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 3 }
    }
  }, [
    AutoScroll({ playOnInit: true }),
  ]);

  return (
    <section className='relative overflow-hidden px-4 py-20 md:px-20 text-center md:text-left bg-red-100'>
      <div className='container mx-auto'>
        {/* ---------------------------------------------- */}

        <div className='flex flex-col items-center justify-center mb-18'>
          <h2 className="text-4xl font-bold">Services</h2>

        </div>

        <div className="relative">

          <div className='overflow-hidden' ref={emblaRef}>
            <div className="flex">
              {services.map((item, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 lg:flex-[0_0_calc(100%/3)] px-3">
                  {/* ------------ARTICLE------------ */}
                  <article className='bg-[#1e293d] text-white p-6 rounded-2xl space-y-4 h-full flex flex-col'>

                    <div className='flex-1 flex items-start justify-between'>
                      <div className='flex gap-3'>
                        <span className='text-3xl'>{item.icon}</span>
                        <div>
                          <h3 className='font-bold text-xl my-1'>{item.title}</h3>
                          <p className='text-sm text-gray-400 select-none'>{item.description}</p>
                        </div>
                      </div>
                    </div>

                    <div className='border-t border-gray-700 pt-4 items-center justify-between'>
                      <div className='flex items-center gap-2 text-sm'>
                        <Clock className='w-4 h-4' />
                        <span>{item.duration}</span>
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
      </div>
    </section>
  )
}