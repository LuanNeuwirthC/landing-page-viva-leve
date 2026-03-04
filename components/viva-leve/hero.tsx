"use client"

import { useInView } from "@/hooks/use-in-view"
import { Button } from "@/components/ui/button"

export function Hero() {
  const { ref, isInView } = useInView()

  return (
    <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 bg-viva-beige overflow-hidden">
      {/* Organic shapes background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-viva-sage/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-viva-sage/5 rounded-full blur-3xl" />
      </div>

      <div 
        ref={ref}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#4A7A5A] leading-tight text-balance">
              Cuide do seu corpo e da sua mente, do seu jeito.
            </h1>
            <p className="mt-6 text-lg text-[#333333] leading-relaxed max-w-xl">
              A Viva Leve oferece bem-estar completo para quem tem uma rotina corrida — de forma simples, acessível e sem pressão.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-[#4A7A5A] hover:bg-[#2D4A35] text-white font-semibold px-8 py-6 rounded-full text-lg transition-all duration-300"
              >
                Começar 7 dias grátis
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-[#4A7A5A] text-[#4A7A5A] hover:bg-[#4A7A5A] hover:text-white font-semibold px-8 py-6 rounded-full text-lg transition-all duration-300"
              >
                Saiba mais
              </Button>
            </div>

            <div className="mt-6 inline-flex items-center gap-2 bg-[#C4694A]/10 text-[#C4694A] px-4 py-2 rounded-full text-sm font-medium">
              <span>Sem cartão de crédito • Cancele quando quiser</span>
            </div>
          </div>

          {/* Image */}
          <div className={`${isInView ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'}`}>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80"
                alt="Pessoa meditando em ambiente natural"
                className="w-full h-[400px] lg:h-[500px] object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 rounded-3xl ring-1 ring-[#4A7A5A]/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
