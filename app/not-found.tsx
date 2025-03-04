import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

import Link from 'next/link'

export default function NotFound() {
  return (
    <main className='mx-auto flex justify-center max-w-5xl flex-col items-center h-screen text-center'>
      <h2 className='text-5xl font-bold text-default'>
        OOPS, Página não encontrada
      </h2>
    

      <p className='text-xl text-gray-600 mt-10'>
        A página solicitada não existe ou foi removida
      </p>

      <Link
        href='/'
        className={cn(
          buttonVariants({ variant: 'default' }),
          'text-2xl mt-10 px-6 py-6 text-white transition-all duration-300'
        )}
      >
        Voltar a Home
      </Link>
    </main>
  )
}
