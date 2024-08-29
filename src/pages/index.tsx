import { Inter } from 'next/font/google'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '@/components/footer'
import Carroussel from '@/components/carrousel'
import Link from 'next/link'
import videosData from './videos/videos.json'
import Logo from '../../public/logo.webp'
import Thumb from '../../public/thumb1.webp'
import productsData from './products/products.json'

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
        <div className="w-[85%] flex flex-col gap-10 md:w-4/5">
          <Carroussel title="Mais assistidos">
            {videosData.maisAssistidos.map((video) => (
              <Link
                className="w-full flex flex-col items-center gap-2"
                key={video.id}
                href={`/videos/${video.id}`}
              >
                <Image
                  alt={`banner ${video.id}`}
                  src={video.bannerSrc}
                  quality={100}
                  width={video.width}
                  height={video.height}
                  className="p-1 rounded-[.7rem] md:p-3 md:rounded-[1.5rem]"
                />
                <h1 className="font-bold text-[10px] text-center px-1 md:px-3 md:text-sm">
                  {video.title}
                </h1>
              </Link>
            ))}
          </Carroussel>
          <Carroussel title="Lançamentos">
            {videosData.lancamentos.map((video) => (
              <Link
                className="w-full flex flex-col items-center gap-2"
                key={video.id}
                href={`/videos/${video.id}`}
              >
                <Image
                  alt={`banner ${video.id}`}
                  src={video.bannerSrc}
                  quality={100}
                  width={video.width}
                  height={video.height}
                  className="p-1 rounded-[.7rem] md:p-3 md:rounded-[1.5rem]"
                />
                <h1 className="font-bold text-[10px] text-center px-1 md:px-3 md:text-sm">
                  {video.title}
                </h1>
              </Link>
            ))}
          </Carroussel>
          <Carroussel title="Obtenha mais">
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
                  className="w-full object-cover h-[152px] md:h-[290px] p-1 rounded-[.7rem] md:p-3 md:rounded-[1.5rem]"
                />
                <h1 className="font-bold text-[10px] text-center px-1 md:px-3 md:text-sm">
                  {product.title}
                </h1>
              </Link>
            ))}
          </Carroussel>
        </div>
        <Footer />
      </main>
    </>
  )
}
