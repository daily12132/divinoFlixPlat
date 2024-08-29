import { useRouter } from 'next/router'
import Head from 'next/head'
import productsData from './products.json'
import { CaretLeft } from 'phosphor-react'
import Image from 'next/image'

const ProductPage = () => {
  const router = useRouter()
  const { id } = router.query

  const productData = [...productsData.products].find(
    (product) => product.id === parseInt(id as string),
  )

  if (!productData) {
    return <p>Vídeo não encontrado</p>
  }

  return (
    <>
      <Head>
        <title>{productData.title}</title>
        <meta name="Teste" content="Teste" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.webp" />
      </Head>
      <main className="w-[90%] min-h-screen flex flex-col items-start justify-start mx-auto gap-6 py-14 md:gap-10">
        <a className="flex items-center text-3xl font-bold gap-2" href="/shop">
          <CaretLeft size={32} weight="bold" color="#ffffff" />
          voltar
        </a>
        <div className="w-full flex flex-col justify-center items-start gap-6 md:items-center">
          <h1 className="w-full text-left text-xl font-bold md:text-center md:text-3xl">
            {productData.title}
          </h1>
          <Image
            alt="banner"
            src={productData.bannerSrc}
            quality={100}
            width={productData.width}
            height={productData.height}
            className="rounded-[.5rem] w-full md:w-[20%] md:rounded-[1.5rem]"
          />
          <p className="text-left md:text-center">{productData.description}</p>
          <a
            href={productData.checkoutUrl}
            className="w-full text-center font-bold p-4 rounded-md text-2xl bg-[#E50914] md:w-max"
          >
            OBTER AGORA!
          </a>
        </div>
      </main>
    </>
  )
}

export default ProductPage
