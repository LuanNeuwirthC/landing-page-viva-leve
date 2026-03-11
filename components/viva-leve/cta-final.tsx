"use client"

import { useInView } from "@/hooks/use-in-view"
import { Button } from "@/components/ui/button"

export function CTAFinal() {
  const { ref, isInView } = useInView()

  return (
    <section id="contato" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=1200&q=80"
          alt="Natureza tranquila"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#4E8C3F]/85" />
      </div>

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance">
            Pronto para viver mais leve?
          </h2>
          <p className="mt-6 text-lg text-[#E8EDE0] max-w-2xl mx-auto">
            Comece seus 7 dias grátis agora. Sem cartão de crédito, sem compromisso.
          </p>
        </div>

        <div className={`mt-10 ${isInView ? 'animate-fade-in-up animation-delay-100' : 'opacity-0'}`}>
          <a href="#planos">
            <Button
              size="lg"
              className="bg-white hover:bg-[#E8EDE0] text-[#4E8C3F] font-bold px-10 py-7 rounded-full text-lg transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              Comecar agora gratuitamente
            </Button>
          </a>
        </div>

        <p className={`mt-8 text-[#E8EDE0]/80 text-lg italic ${isInView ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'}`}>
          Respire. Viva leve.
        </p>
      </div>
    </section>
  )
}
