import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { ShoppingCart, House, Plus } from 'phosphor-react'

export default function Footer() {
  const router = useRouter()
  const [selectedIcon, setSelectedIcon] = useState('home') // Estado para controlar o ícone selecionado

  // Efeito para verificar a rota atual e definir o ícone selecionado
  useEffect(() => {
    // Função para determinar qual ícone deve estar selecionado com base na rota
    const determineSelectedIcon = () => {
      switch (router.pathname) {
        case '/':
          setSelectedIcon('home')
          break
        case '/shop':
          setSelectedIcon('shoppingCart')
          break
        case '/plus':
          setSelectedIcon('plus')
          break
        default:
          setSelectedIcon('none') // Caso não haja correspondência, nenhum ícone está selecionado
          break
      }
    }

    determineSelectedIcon() // Chama a função ao montar o componente

    // Assina o evento de mudança de rota para atualizar o ícone selecionado
    router.events.on('routeChangeComplete', determineSelectedIcon)

    // Limpa o evento de mudança de rota quando o componente é desmontado para evitar vazamentos de memória
    return () => {
      router.events.off('routeChangeComplete', determineSelectedIcon)
    }
  }, [router.pathname, router.events]) // Executa o efeito sempre que a rota muda

  return (
    <div className="w-full flex justify-center h-[64px]">
      <div className="fixed bottom-0 w-screen flex justify-center p-4 bg-gradient-radial">
        <div className="w-4/5 flex justify-center gap-8">
          <House
            size={32}
            weight={selectedIcon === 'home' ? 'fill' : 'regular'}
            onClick={() => router.push('/')}
            className="cursor-pointer"
          />
          <Plus
            size={32}
            weight="bold"
            onClick={() => router.push('/plus')}
            className="cursor-pointer"
          />
          <ShoppingCart
            size={32}
            weight={selectedIcon === 'shoppingCart' ? 'fill' : 'regular'}
            onClick={() => router.push('/shop')}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  )
}
