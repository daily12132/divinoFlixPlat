import React, { useRef, useEffect, useState } from 'react'

export function Vsl() {
  const meuIframeRef = useRef<HTMLIFrameElement>(null)
  const [iframeHeight, setIframeHeight] = useState('')

  // Função para ajustar a altura do iframe com base na largura
  const ajustarAltura = () => {
    if (meuIframeRef.current) {
      const width = meuIframeRef.current.clientWidth // Obter a largura do iframe
      const scaleFactor = 0.56267 // Fator de escala de 10%, você pode ajustar conforme necessário
      const newHeight = `${width * scaleFactor}px` // Calcula a nova altura em pixels
      setIframeHeight(newHeight) // Define a nova altura para o estado
    }
  }

  // Chamando a função ajustarAltura quando o componente for renderizado e toda vez que o tamanho da janela mudar
  useEffect(() => {
    ajustarAltura()
    const handleResize = () => ajustarAltura()
    window.addEventListener('resize', handleResize)

    // Remover o listener quando o componente for desmontado para evitar memory leaks
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="w-full">
      <iframe
        ref={meuIframeRef}
        src="https://player-vz-7ac42c21-3a7.tv.pandavideo.com.br/embed/?v=12f7692b-6dc1-41f7-8999-a1a114661dac"
        id="panda-12f7692b-6dc1-41f7-8999-a1a114661dac"
        referrerPolicy="origin"
        className="w-full border-none shadow-[15px 15px 10px 0px rgba(0, 0, 0, .30)] rounded-[10px]"
        style={{
          height: iframeHeight,
        }}
      />
    </div>
  )
}
