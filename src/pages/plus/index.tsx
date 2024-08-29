import { Inter } from 'next/font/google'
import Head from 'next/head'
import Thumb from '../../../public/tumb.webp'
import { Check } from 'phosphor-react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Divinoflix</title>
        <meta name="Teste" content="Teste" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.webp" />
      </Head>
      <main
        style={{
          backgroundImage: `url(${Thumb.src})`, // Define a imagem como background
          backgroundSize: 'cover', // Garante que a imagem cubra todo o background
          backgroundRepeat: 'no-repeat', // Não repete a imagem no background
        }}
        className={`w-screen min-h-screen flex flex-col items-center justify-center mx-auto gap-8 ${inter.className}`}
      >
        <div
          style={{ backdropFilter: 'blur(20px)' }}
          className="w-[90%] flex flex-col justify-center items-center gap-3 p-6 rounded-xl bg-[#00000095] md:w-[30%]"
        >
          <h1 className="text-3xl font-bold">
            DIVINO <span className="text-[#E50914]">PLUS +</span>
          </h1>
          <p className="w-full flex justify-start gap-2">
            <Check
              size={32}
              weight="bold"
              color="#E50914"
              className="flex-shrink-0"
            />{' '}
            Sem compromisso, cancele quando quiser.
          </p>
          <p className="w-full flex justify-start gap-2">
            <Check
              size={32}
              weight="bold"
              color="#E50914"
              className="flex-shrink-0"
            />{' '}
            Entretenimento sem fim, por um preço baixo.
          </p>
          <p className="w-full flex justify-start gap-2">
            <Check
              size={32}
              weight="bold"
              color="#E50914"
              className="flex-shrink-0"
            />
            Entreterimento para toda a família.
          </p>
          <p className="w-full flex justify-start gap-2">
            <Check
              size={32}
              weight="bold"
              color="#E50914"
              className="flex-shrink-0"
            />{' '}
            Divirta-se com a Divinoflix em todos os seus aparelhos.
          </p>
          <a
            href="/plus/planos"
            className="w-full text-center font-bold p-4 rounded-md text-xl bg-[#E50914]"
          >
            ESCOLHER PLANO
          </a>
        </div>
      </main>
    </>
  )
}
