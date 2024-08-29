import { useRouter } from 'next/router'
import Head from 'next/head'
import videosData from './videos.json'
import { CaretLeft } from 'phosphor-react'

const VideoPage = () => {
  const router = useRouter()
  const { id } = router.query

  const videoData = [
    ...videosData.maisAssistidos,
    ...videosData.lancamentos,
  ].find((video) => video.id === parseInt(id as string))

  if (!videoData) {
    return <p>Vídeo não encontrado</p>
  }

  return (
    <>
      <Head>
        <title>{videoData.title2}</title>
        <meta name="Teste" content="Teste" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.webp" />
      </Head>
      <main className="w-[90%] min-h-screen flex flex-col items-start justify-start mx-auto gap-10 py-14">
        <a className="flex items-center text-3xl font-bold gap-2" href="/">
          <CaretLeft size={32} weight="bold" color="#ffffff" />
          voltar
        </a>
        <h1 className="w-full text-xl font-bold md:text-3xl">
          {videoData.title}
        </h1>
        <div className="w-full flex justify-center">
          <iframe
            width="560"
            height="315"
            src={videoData.videoUrl}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
        <p className="w-full">{videoData.description}</p>
      </main>
    </>
  )
}

export default VideoPage
