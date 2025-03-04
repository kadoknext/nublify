import ang from '@/public/img/ang.png'
import Image from 'next/image'
export default function Card() {
  return (
    <section className='relative overflow-hidden px-4 py-20 md:px-20 text-center md:text-left bg-linear-to-b from-gray-300 to-zinco-600'>
      <div className='container mx-auto'>
        <article className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="border border-gray-300 rounded-md shadow-2xl hover:border-gray-400 transition-all duration-300 overflow-hidden">
            <div className='bg-[#f4f5fb] px-6 py-3 flex items-center gap-4 border-b-2'>
              <Image src={ang} alt='' width={80} height={80} className='rounded-full' />
              <div className='flex flex-col'>
                <h2 className='text-2xl font-bold'>Angelo</h2>
                <p className='text-gray-600'>CG/VFX Artist</p>
              </div>
            </div>
            <div className='bg-white p-8'>
              <p>
                “Seamless integration with your computer. If you cant afford a professional workstation, or want to supplement your current rig, Zeus is the best option I can think of.”
              </p>
            </div>
          </div>

          {/* ----------------------------2 */}
          <div className="border border-gray-300 rounded-md shadow-2xl hover:border-gray-400 transition-all duration-300 overflow-hidden">
            <div className='bg-[#f4f5fb] px-6 py-3 flex items-center gap-4 border-b-2'>
              <Image src={ang} alt='' width={80} height={80} className='rounded-full' />
              <div className='flex flex-col'>
                <h2 className='text-2xl font-bold'>Hamid Hassanzade</h2>
                <p className='text-gray-600'>Architect</p>
              </div>
            </div>
            <div className='bg-white p-8'>
              <p>
                “Seamless integration with your computer. If you cant afford a professional workstation, or want to supplement your current rig, Zeus is the best option I can think of.”
              </p>
            </div>
          </div>

          {/* ----------------------------3 */}
          <div className="border border-gray-300 rounded-md shadow-2xl hover:border-gray-400 transition-all duration-300 overflow-hidden">
            <div className='bg-[#f4f5fb] px-6 py-3 flex items-center gap-4 border-b-2'>
              <Image src={ang} alt='' width={80} height={80} className='rounded-full' />
              <div className='flex flex-col'>
                <h2 className='text-2xl font-bold'>Grant Abbitt</h2>
                <p className='text-gray-600'>D Modeling Artist</p>
              </div>
            </div>
            <div className='bg-white p-8'>
              <p>
                “Seamless integration with your computer. If you cant afford a professional workstation, or want to supplement your current rig, Zeus is the best option I can think of.”
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>

  )
}   