import { Inter } from 'next/font/google'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '@/components/footer'
import Logo from '../../public/logo.webp'
import Thumb from '../../public/thumb1.webp'
import productsData from './products/products.json'
import Link from 'next/link'

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
        className={`w-full min-h-screen flex flex-col items-center justify-start mx-auto gap-8 md:justify-center ${inter.className}`}
      >
        <div
          style={{
            backgroundImage: `url(${Thumb.src})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
          className="w-full flex justify-center"
        >
          <Image
            alt="logo"
            src={Logo}
            quality={100}
            className="w-[50%] h-auto md:w-[250px]"
          />
        </div>
        <div className="w-[85%] flex flex-col gap-4 md:w-4/5">
          <h1 className="text-base font-bold md:text-2xl">
            Obtenha muito mais
          </h1>
          <div className="w-full grid grid-cols-2 gap-4 md:grid-cols-3">
            {productsData.products.map((product) => (
              <Link
                className="w-full flex flex-col items-center gap-2"
                key={product.id}
                href={`/products/${product.id}`}
              >
                <Image
                  alt={`banner ${product.id}`}
                  src={product.bannerSrc}
                  quality={100}
                  width={product.width}
                  height={product.height}
                  className="rounded-[.5rem] w-full object-cover h-[200px] md:h-[460px] border-[#E50914] hover:border-[3px] hover:scale-105 transition-all duration-300 md:rounded-[1.5rem]"
                />
                <h1 className="font-bold text-xs md:text-lg">
                  {product.title}
                </h1>
              </Link>
            ))}
          </div>
        </div>
        <Footer />
      </main>
    </>
  )
}
