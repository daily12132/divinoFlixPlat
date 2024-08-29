import { useState } from 'react'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Image from 'next/image'
import Logo from '../../../public/logo.webp'
import { CheckCircle } from 'phosphor-react'

const inter = Inter({ subsets: ['latin'] })

type Plan = 'premium' | 'standard'

const planDetails = {
  premium: {
    link: 'https://pay.kirvano.com/cead5f36-d9bf-41a2-a4ab-0e1abbb242c4',
  },
  standard: {
    link: 'https://pay.kirvano.com/49b95747-1a48-404f-a8f8-5df60dc45b80',
  },
}

export default function Home() {
  const [selectedPlan, setSelectedPlan] = useState<Plan>('premium')

  const handlePlanChange = (plan: Plan) => {
    setSelectedPlan(plan)
  }

  return (
    <>
      <Head>
        <title>Divinoflix</title>
        <meta name="Teste" content="Teste" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.webp" />
      </Head>
      <main
        className={`w-full min-h-screen flex flex-col items-center justify-center mx-auto py-8 gap-8 bg-white text-[#333333] ${inter.className}`}
      >
        <div className="w-[90%] flex justify-center border-b-2 pb-4 md:w-4/5 md:justify-start">
          <Image alt="logo" src={Logo} quality={100} width={200} />
        </div>
        <h1 className="w-[90%] text-center text-[32px] leading-8 font-bold">
          Escolha o melhor plano para você
        </h1>
        <div className="w-[95%] flex justify-center gap-3 md:gap-6 md:w-4/5">
          <div
            onClick={() => handlePlanChange('premium')}
            className={`w-[50%] border border-[rgba(128, 128, 128, 0.4)] rounded-[18px] md:w-2/6 cursor-pointer ${selectedPlan === 'premium' ? 'shadow-2xl border-[#00000050] scale-[1.02] transition-all md:scale-[1.03]' : ''}`}
          >
            <div className="m-2">
              <div className="relative w-full flex flex-col items-start justify-start px-4 py-[10px] bg-gradient-netflix1 text-white rounded-xl">
                <h1 className="text-lg font-medium">Premium</h1>
                <p className="text-sm font-medium">4K + HDR</p>
                {selectedPlan === 'premium' ? (
                  <CheckCircle
                    size={22}
                    color="#ffffff"
                    weight="fill"
                    className="absolute bottom-3 right-3"
                  />
                ) : (
                  ''
                )}
              </div>
            </div>
            <div className="my-4 px-4">
              <div className="py-3 border-b-[1px] border-[rgba(128, 128, 128, 0.4)]">
                <p className="text-[13px] font-semibold text-[#767676]">
                  Preço/mês
                </p>
                <h1 className="font-semibold text-[#000000b3]">R$ 19,90</h1>
              </div>
              <div className="py-3 border-b-2 border-[rgba(128, 128, 128, 0.4)]">
                <p className="text-[13px] font-semibold text-[#767676]">
                  Qualidade de vídeo e áudio
                </p>
                <h1 className="font-semibold text-[#000000b3]">Excepcional</h1>
              </div>
              <div className="py-3 border-b-2 border-[rgba(128, 128, 128, 0.4)]">
                <p className="text-[13px] font-semibold text-[#767676]">
                  Resolução
                </p>
                <h1 className="font-semibold text-[#000000b3]">
                  4K (Ultra HD) + HDR
                </h1>
              </div>
              <div className="py-3 border-b-2 border-[rgba(128, 128, 128, 0.4)]">
                <p className="text-[13px] font-semibold text-[#767676]">
                  Áudio espacial (som imersivo)
                </p>
                <h1 className="font-semibold text-[#000000b3]">Incluso</h1>
              </div>
              <div className="py-3 border-b-2 border-[rgba(128, 128, 128, 0.4)]">
                <p className="text-[13px] font-semibold text-[#767676]">
                  Aparelhos compatíveis
                </p>
                <h1 className="font-semibold text-[#000000b3]">
                  TV, computador, celular, tablet
                </h1>
              </div>
              <div className="py-3 border-b-2 border-[rgba(128, 128, 128, 0.4)]">
                <p className="text-[13px] font-semibold text-[#767676]">
                  Aparelhos para assistir ao mesmo tempo na sua residência
                </p>
                <h1 className="font-semibold text-[#000000b3]">4</h1>
              </div>
              <div className="py-3 border-b-2 border-[rgba(128, 128, 128, 0.4)]">
                <p className="text-[13px] font-semibold text-[#767676]">
                  Aparelhos de download
                </p>
                <h1 className="font-semibold text-[#000000b3]">6</h1>
              </div>
              <div className="py-3 border-b-2 border-[rgba(128, 128, 128, 0.4)]">
                <p className="text-[13px] font-semibold text-[#767676]">
                  Anúncios
                </p>
                <h1 className="font-semibold text-[#000000b3]">Sem anúncios</h1>
              </div>
            </div>
          </div>

          <div
            onClick={() => handlePlanChange('standard')}
            className={`w-[50%] border border-[rgba(128, 128, 128, 0.4)] rounded-[18px] md:w-2/6 cursor-pointer ${selectedPlan === 'standard' ? 'shadow-2xl border-[#00000050] scale-[1.02] transition-all md:scale-[1.03]' : ''}`}
          >
            <div className="m-2">
              <div className="relative w-full flex flex-col items-start justify-start px-4 py-[10px] bg-gradient-netflix2 text-white rounded-xl">
                <h1 className="text-lg font-medium">Padrão</h1>
                <p className="text-sm font-medium">1080p</p>
                {selectedPlan === 'standard' ? (
                  <CheckCircle
                    size={22}
                    color="#ffffff"
                    weight="fill"
                    className="absolute bottom-3 right-3"
                  />
                ) : (
                  ''
                )}
              </div>
            </div>
            <div className="my-4 px-4">
              <div className="py-3 border-b-[1px] border-[rgba(128, 128, 128, 0.4)]">
                <p className="text-[13px] font-semibold text-[#767676]">
                  Preço/mês
                </p>
                <h1 className="font-semibold text-[#000000b3]">R$ 9,90</h1>
              </div>
              <div className="py-3 border-b-2 border-[rgba(128, 128, 128, 0.4)]">
                <p className="text-[13px] font-semibold text-[#767676]">
                  Qualidade de vídeo e áudio
                </p>
                <h1 className="font-semibold text-[#000000b3]">Boa</h1>
              </div>
              <div className="py-3 border-b-2 border-[rgba(128, 128, 128, 0.4)]">
                <p className="text-[13px] font-semibold text-[#767676]">
                  Resolução
                </p>
                <h1 className="font-semibold text-[#000000b3]">
                  1080p (Full HD)
                </h1>
              </div>
              <div className="py-3 border-b-2 border-[rgba(128, 128, 128, 0.4)]">
                <p className="text-[13px] font-semibold text-[#767676]">
                  Aparelhos compatíveis
                </p>
                <h1 className="font-semibold text-[#000000b3]">
                  TV, computador, celular, tablet
                </h1>
              </div>
              <div className="py-3 border-b-2 border-[rgba(128, 128, 128, 0.4)]">
                <p className="text-[13px] font-semibold text-[#767676]">
                  Aparelhos para assistir ao mesmo tempo na sua residência
                </p>
                <h1 className="font-semibold text-[#000000b3]">2</h1>
              </div>
              <div className="py-3 border-b-2 border-[rgba(128, 128, 128, 0.4)]">
                <p className="text-[13px] font-semibold text-[#767676]">
                  Aparelhos de download
                </p>
                <h1 className="font-semibold text-[#000000b3]">2</h1>
              </div>
              <div className="py-3 border-b-2 border-[rgba(128, 128, 128, 0.4)]">
                <p className="text-[13px] font-semibold text-[#767676]">
                  Anúncios
                </p>
                <h1 className="font-semibold text-[#000000b3]">Sem anúncios</h1>
              </div>
            </div>
          </div>
        </div>
        <a
          href={planDetails[selectedPlan].link}
          className="text-center font-bold p-4 rounded-md text-xl text-white bg-[#E50914]"
        >
          ASSINAR AGORA!
        </a>
      </main>
    </>
  )
}
