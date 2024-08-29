import { CaretDown, CaretRight } from 'phosphor-react'
import React, { useState } from 'react'

interface FaqProps {
  title: string
  desc: string
}

export default function Faq({ title, desc }: FaqProps) {
  const [open, setOpen] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    if (open) {
      setOpen(false)
      setTimeout(() => setIsOpen(false), 290) // Tempo da animação de slideUp
    } else {
      setIsOpen(true)
      setOpen(true) // Pequeno atraso para permitir a aplicação da classe
    }
  }

  return (
    <div className="w-full">
      <div
        className="w-full flex justify-start items-center gap-2 p-4 border-b border-[#181818] cursor-pointer"
        onClick={handleClick}
      >
        {open ? (
          <CaretDown size={16} weight="fill" />
        ) : (
          <CaretRight size={16} weight="fill" />
        )}
        <h1>{title}</h1>
      </div>
      {isOpen && (
        <div
          className={`p-4 text-left text-sm text-[#e9e9e9] transition-all duration-700 ${open ? 'animate-slideDown' : 'animate-slideUp'}`}
        >
          <p>{desc}</p>
        </div>
      )}
    </div>
  )
}
