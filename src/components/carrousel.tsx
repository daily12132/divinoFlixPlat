import Slider from 'react-slick'
import { ReactNode } from 'react'

interface CarrousselProps {
  children: ReactNode
  title: string
}

export default function Carroussel({ children, title }: CarrousselProps) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Para telas menores que 1024px
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
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
  return (
    <div className="w-full flex flex-col gap-2 slider-container">
      <div className="flex items-center gap-3 ml-3 font-bold">
        <h1 className="text-base md:text-2xl">{title}</h1>
      </div>
      <Slider {...settings}>{children}</Slider>
    </div>
  )
}
