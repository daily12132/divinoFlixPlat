import { Inter } from 'next/font/google'
import Head from 'next/head'
import Image from 'next/image'
import Slider from 'react-slick'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import {
  ArrowsClockwise,
  Books,
  CaretDown,
  PuzzlePiece,
  Screencast,
  ThumbsDown,
  ThumbsUp,
} from 'phosphor-react'
import Logo from '../../public/logo.webp'
import Thumb from '../../public/banner.webp'
import Thumb1 from '../../public/thumb1.webp'
import Banner1 from '../../public/thumbs/1.webp'
import Banner2 from '../../public/thumbs/16.webp'
import Banner3 from '../../public/thumbs/20.webp'
import Banner4 from '../../public/thumbs/32.webp'
import Banner5 from '../../public/thumbs/13.webp'
import Banner6 from '../../public/thumbs/14.webp'
import Banner7 from '../../public/thumbs/9.webp'
import Banner8 from '../../public/thumbs/6.webp'
import Banner9 from '../../public/thumbs/7.webp'
import Banner10 from '../../public/thumbs/8.webp'
import Banner11 from '../../public/thumbs/15.webp'
import Banner12 from '../../public/thumbs/31.webp'
import Plat from '../../public/plat.gif'
import Plat2 from '../../public/plat2.webp'
import Plat3 from '../../public/plat3.webp'
import Plat4 from '../../public/plat4.webp'
import Garantia from '../../public/garantia.webp'
import Faq from '../components/faq'
import ScrollButton from '@/components/scrollButton'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768, // Para telas menores que 768px
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
    ],
  }

  const today = format(new Date(), 'dd/MM/yyyy', { locale: ptBR })

  return (
    <>
      <Head>
        <title>Divinoflix</title>
        <meta name="Teste" content="Teste" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.webp" />
      </Head>
      <main
        className={`w-full min-h-screen flex flex-col items-center justify-center mx-auto gap-8 md:justify-center ${inter.className}`}
      >
        <div className="relative w-full flex flex-col justify-center items-center">
          <div
            style={{
              backgroundImage: `url(${Thumb.src})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              opacity: 0.25,
            }}
            className="absolute top-0 w-full h-full"
          />
          <div className="w-[95%] flex flex-col justify-center items-center py-14 gap-10 md:w-[90%]">
            <div className="w-full flex justify-center">
              <div
                style={{ backdropFilter: 'blur(20px)' }}
                className="w-[70%] md:w-max p-4 flex justify-center rounded-xl bg-[#00000095]"
              >
                <Image
                  alt="logo"
                  src={Logo}
                  quality={100}
                  className="w-[100%] h-auto md:w-[180px]"
                />
              </div>
            </div>
            <div className="w-full flex flex-col items-center justify-center text-center gap-4">
              <h1 className="text-[26px] font-bold md:text-[32px]">
                Ensine a seus filhos os princípios e valores da Bíblia.
              </h1>
              <p className="text-[15px] text-[#A8A8A8] md:text-xl">
                Assista onde quiser. Cancele quando quiser.
              </p>
              <p className="text-[15px] md:text-xl">
                Filmes, Histórias Bíblicas, Atividades e Jogos inspirados na
                palavra do Senhor
              </p>

              <ScrollButton title=" ACESSAR PLATAFORMA!" sectionId="scroll2" />
            </div>
          </div>
        </div>
        <div className="w-[90%] flex flex-col items-center justify-center gap-6 md:gap-10 md:w-[90%]">
          <div className="w-full flex flex-col gap-3 items-center">
            <CaretDown size={32} weight="bold" color="#fff" />
            <Slider {...settings} className="w-full">
              <Image
                alt="banner"
                src={Banner1}
                quality={100}
                className="p-1 rounded-[.7rem] md:p-3 md:rounded-[1.5rem]"
              />
              <Image
                alt="banner"
                src={Banner2}
                quality={100}
                className="p-1 rounded-[.7rem] md:p-3 md:rounded-[1.5rem]"
              />
              <Image
                alt="banner"
                src={Banner3}
                quality={100}
                className="p-1 rounded-[.7rem] md:p-3 md:rounded-[1.5rem]"
              />
              <Image
                alt="banner"
                src={Banner4}
                quality={100}
                className="p-1 rounded-[.7rem] md:p-3 md:rounded-[1.5rem]"
              />
              <Image
                alt="banner"
                src={Banner5}
                quality={100}
                className="p-1 rounded-[.7rem] md:p-3 md:rounded-[1.5rem]"
              />
              <Image
                alt="banner"
                src={Banner6}
                quality={100}
                className="p-1 rounded-[.7rem] md:p-3 md:rounded-[1.5rem]"
              />
              <Image
                alt="banner"
                src={Banner7}
                quality={100}
                className="p-1 rounded-[.7rem] md:p-3 md:rounded-[1.5rem]"
              />
              <Image
                alt="banner"
                src={Banner8}
                quality={100}
                className="p-1 rounded-[.7rem] md:p-3 md:rounded-[1.5rem]"
              />
              <Image
                alt="banner"
                src={Banner9}
                quality={100}
                className="p-1 rounded-[.7rem] md:p-3 md:rounded-[1.5rem]"
              />
              <Image
                alt="banner"
                src={Banner10}
                quality={100}
                className="p-1 rounded-[.7rem] md:p-3 md:rounded-[1.5rem]"
              />
              <Image
                alt="banner"
                src={Banner11}
                quality={100}
                className="p-1 rounded-[.7rem] md:p-3 md:rounded-[1.5rem]"
              />
              <Image
                alt="banner"
                src={Banner12}
                quality={100}
                className="p-1 rounded-[.7rem] md:p-3 md:rounded-[1.5rem]"
              />
            </Slider>
          </div>
          <div
            id="scroll2"
            className="w-full flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <div className="w-full flex flex-col items-center text-center gap-4 md:gap-2 hover:scale-105 transition-all duration-300 md:w-[50%]">
              <h1 className="text-2xl font-bold">
                Assita em <span className="text-[#E50914]">qualquer lugar</span>
              </h1>
              <p className="text-[#FAFAFA] text-[15px] md:text-lg font-light">
                Assista em seu celular, na sua TV ou tablet!
              </p>
              <p className="text-[#FAFAFA] text-[15px] md:text-lg font-light">
                Veja como é dentro da plataforma →
              </p>
            </div>
            <Image
              className="w-full md:w-[50%] hover:scale-105 transition-all duration-300"
              alt="gif"
              src={Plat}
              quality={100}
            />
          </div>
          <h1 className="text-xl md:text-4xl text-center font-bold">
            A DIVINOFLIX É <span className="text-[#E50914]">MUITO MIAS</span> DO
            QUE UMA PLATAFORMA DE FILMES
          </h1>
          <div className="w-full flex flex-col gap-4 items-center justify-center text-center">
            <p className="text-[15px] md:text-base">
              É um <b>ecossistema completo</b> desenvolvido por{' '}
              <u>pediatras,</u> <u>especialistas,</u> <u>pedagogos</u> e{' '}
              <u>psicólogos cristãos!</u>
            </p>
            <p className="text-[15px] md:text-base">
              O nosso objetivo é facilitar o acesso à Palavra, criando um hábito
              que vai <b>transformar vida do seu filho!</b>
            </p>
            <ScrollButton title=" ACESSAR PLATAFORMA!" sectionId="scroll3" />
            <Image alt="image" src={Plat2} quality={100} />
            <div className="w-full flex flex-col gap-10">
              <div className="w-full flex flex-col md:flex-row justify-around items-center gap-10">
                <Image
                  className="w-full md:w-[50%] rounded-lg hover:scale-105 transition-all duration-300"
                  alt="gif"
                  src={Plat3}
                  quality={100}
                />
                <div
                  id="scroll3"
                  className="w-full md:w-[40%] flex flex-col items-center text-left gap-6 hover:scale-105 transition-all duration-300"
                >
                  <ThumbsDown size={50} weight="fill" color="#E50914" />
                  <h1 className="text-2xl text-center md:text-left font-bold">
                    Os vídeos, séries e filmes infantis atuais podem deixar seu
                    filho esposto a:
                  </h1>
                  <div className="w-full flex flex-col items-center md:items-start justify-center gap-2">
                    <p className="text-[#FAFAFA] text-lg font-light">
                      Intolerância religiosa
                    </p>
                    <p className="text-[#FAFAFA] text-lg font-light">
                      Violência exagerada
                    </p>
                    <p className="text-[#FAFAFA] text-lg font-light">
                      Doutrinação da fé
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full h-full flex flex-col md:flex-row justify-around items-center text-left gap-10">
                <Image
                  className="w-full md:w-[50%] rounded-lg hover:scale-105 transition-all duration-300"
                  alt="gif"
                  src={Plat4}
                  quality={100}
                />
                <div className="w-full md:w-[40%] flex flex-col items-center gap-6 hover:scale-105 transition-all duration-300">
                  <ThumbsUp size={50} weight="fill" color="#2EDB5B" />
                  <h1 className="text-2xl text-center md:text-left font-bold">
                    Veja como um conteúdo Cristão e de qualidade, pode auxiliar
                    na vivência familiar:
                  </h1>
                  <ul className="flex flex-col text-left gap-4">
                    <li className="text-[#FAFAFA] text-lg font-light">
                      Melhora a convivência na família, reduz brigas entre
                      irmãos
                    </li>
                    <li className="text-[#FAFAFA] text-lg font-light">
                      Blinda a criança das más influências que o mundo pode
                      trazer
                    </li>
                    <li className="text-[#FAFAFA] text-lg font-light">
                      As histórias de personagens aumentam o conhecimento geral
                      da bíblia
                    </li>
                    <li className="text-[#FAFAFA] text-lg font-light">
                      Pode auxiliar nos estudos da escola. Com histórias de
                      foco, estudo e conquista
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <h1 className="w-full text-center text-2xl md:text-4xl font-bold">
            A PLATAFORMA <span className="text-[#E50914]">DIVINOFLIX</span>{' '}
            CONTA COM:
          </h1>
          <div className="w-full md:w-[80%] flex flex-col justify-center items-start gap-6">
            <p className="flex items-center gap-2">
              <Screencast
                size={32}
                color="rgb(255, 77, 77)"
                className="flex-shrink-0"
              />
              +300 Filmes e Desenhos Animados Com História Da Bíblia
            </p>
            <p className="flex items-center gap-2">
              <Books
                size={32}
                color="rgb(255, 77, 77)"
                className="flex-shrink-0"
              />
              +150 Histórias Bíblicas Para Leitura
            </p>
            <p className="flex items-center gap-2">
              <PuzzlePiece
                size={32}
                color="rgb(255, 77, 77)"
                className="flex-shrink-0"
              />
              +100 Atividades De Alfabetização e Jogos Pedagógicos Com Conteúdos
              Bíblicos
            </p>
            <p className="flex items-center gap-2">
              <ArrowsClockwise
                size={32}
                color="rgb(255, 77, 77)"
                className="flex-shrink-0"
              />
              Conteúdos Novos Todos Os Dias
            </p>
          </div>
          <h1 className="w-full text-center text-2xl md:text-4xl font-bold">
            VEJA DEPOIMENTOS <span className="text-[#E50914]">REAIS</span>
          </h1>
          <iframe
            src="https://www.youtube.com/embed/qGYGntDqX6g?si=8xty8m1TpYKrMeX9"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            className="w-full md:w-[60%] h-[350px]"
          ></iframe>
          <div
            className="w-full flex flex-col items-center justify-center gap-6 py-10"
            style={{
              backgroundImage: `url(${Thumb1.src})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div
              style={{ backdropFilter: 'blur(20px)' }}
              className="w-[90%] md:w-[45%] flex flex-col justify-center items-center text-center gap-3 p-6 rounded-xl bg-[#00000095]"
            >
              <p className="text-xl md:text-2xl font-bold">
                <span className="text-[#E50914]">Afaste</span> seus filhos das
                <span className="text-[#E50914]">más influências</span> del do
                mundo
              </p>
              <h1 className="text-5xl font-bold">+ de 7.000</h1>
              <p>
                Famílias já assinaram um plano Divinoflix e estão trilhando seus
                filhos para uma vida abençoada
              </p>
              <ScrollButton title=" ACESSAR PLATAFORMA!" sectionId="planos" />
            </div>
          </div>
          <div
            id="planos"
            className="w-full md:w-[60%] flex flex-col items-center justify-center gap-4 p-8 bg-white text-black text-center rounded-2xl"
          >
            <Image alt="logo" src={Logo} className="w-[60%]" />
            <h1 className="text-2xl font-black">PLANOS</h1>
            <p>
              Por se tratar de um{' '}
              <b>material pedagógico de ensinamento Bíblico,</b>
              nosso objetivo é atingir o maior número de famílias
            </p>
            <p>
              Por esse motivo estamos{' '}
              <b>LIBERANDO OS ACESSOS POR UM VALOR SIMBÓLICO</b>
            </p>
            <p>
              Apenas para <b>manter a plataforma no ar</b> e sempre atualizada
              com <b>conteúdos novos</b>
            </p>
            <p>
              Tenha acesso á dezenas de{' '}
              <b>AULAS E JOGOS DIVERTIDOS DE ALFABETIZAÇÃO</b>
            </p>
            <h1 className="text-2xl font-black">
              HOJE <span className="text-[#E50914]">{today}</span>, É O ÚLTIMO
              DIA DOS PREÇOS ESPECIAIS!
            </h1>
            <a
              href="/plus/planos"
              className="w-full md:w-max text-center font-black p-4 mt-4 rounded-md text-2xl text-white bg-[#E50914] hover:scale-105 transition-all"
            >
              ESCOLHER PLANO!
            </a>
          </div>
          <div className="w-full flex flex-col items-center justify-center text-center gap-4">
            <Image
              alt="garantia"
              src={Garantia}
              quality={100}
              className="w-[40%] h-auto"
            />
            <h1 className="text-[#E50914] text-[32px] font-bold">
              EXPERIMENTE SEM RISCOS POR 30 DIAS:
            </h1>
            <p>
              Confiamos na qualidade da nossa plataforma, que você pode entrar e
              sair sem pagar nada nesse período! Basta entrar em contato com o
              suporte e cancelar!
            </p>
            <p>
              Devolveremos 100% do seu investimento, sem perguntas. Estamos
              entregando a você uma GARANTIA clara e objetiva.
            </p>
            <ScrollButton
              title=" EXPERIMENTAR POR 30 DIAS!"
              sectionId="planos"
            />
          </div>
          <div className="w-full">
            <Faq
              title="O que é a Divonoflix ?"
              desc="A Divonoflix é uma platadorma desenvolvida para dar uma experiência de streaming aos cristãos. A ideia é atiçar a fome pela palavra no seu filho, para que ele passe mais tempo com Deus e evite o desperdício de tempo."
            />
            <Faq
              title="POSSO BAIXAR EPISODIOS PARA ASSSISTIR OFFLINE?"
              desc="Você pode baixar os episodios para iOS ou Android. Use os downloads para levar para onde quiser sem precisar de conexão com a internet."
            />
            <Faq
              title="COMO SERÁ DISPONIBILIZADO O MEU ACESSO À PLATAFORMA?"
              desc="Após a confirmação do pagamento, o acesso à plataforma será imediatamente liberado. Você receberá um e-mail contendo o link de acesso, além de seu login e senha exclusivos."
            />
            <Faq
              title="COMO FAÇO PARA CANCELAR?"
              desc="A Divinoflix é flexível. Não há contratos nem compromissos. Você pode cancelar a sua conta na internet com apenas dois cliques. Não há taxa de cancelamento – você pode começar ou encerrar a qualquer momento."
            />
            <Faq
              title="FUNCIONA EM TODOS OS APARELHOS?"
              desc="Assista onde quiser, quando quiser. Faça login com sua conta para começar a assistir em qualquer aparelho conectado à internet como computadores, Smart TVs, smartphones, tablets, aparelhos de streaming e videogames. Você também pode baixar os seus episódios favoritos com iOS, Android ou Windows 10. Use downloads para levar a Divinoflix para onde quiser sem precisar de conexão com a Internet."
            />
          </div>
        </div>
      </main>
    </>
  )
}
