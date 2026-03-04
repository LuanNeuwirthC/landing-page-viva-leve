"use client"

import { useEffect, useState } from "react"
import { useInView } from "@/hooks/use-in-view"

const donationLevels = [
  { plan: "Essencial", percentage: "5%" },
  { plan: "Equilíbrio", percentage: "8%" },
  { plan: "Viva Pleno", percentage: "10%" }
]

function AnimatedCounter({ target, duration = 2000 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const { ref, isInView } = useInView()

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  }, [isInView, target, duration])

  return (
    <span ref={ref as React.RefObject<HTMLSpanElement>}>
      R$ {count.toLocaleString('pt-BR')}
    </span>
  )
}

export function SocialImpact() {
  const { ref, isInView } = useInView()

  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1200&q=80"
          alt="Comunidade"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#4E8C3F]/90" />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-balance max-w-3xl mx-auto">
            Ao cuidar de você, você também cuida do mundo
          </h2>
          <p className="mt-6 text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            Parte de cada assinatura é doada para instituições de caridade parceiras da Viva Leve. 
            Quanto mais você investe em si, maior o impacto no mundo.
          </p>
        </div>

        {/* Donation Levels */}
        <div className={`mt-12 flex flex-wrap justify-center gap-8 ${isInView ? 'animate-fade-in-up animation-delay-100' : 'opacity-0'}`}>
          {donationLevels.map((level) => (
            <div key={level.plan} className="text-center">
              <div className="text-4xl font-bold text-[#A85438]">
                {level.percentage}
              </div>
              <div className="mt-2 text-white/90 font-medium">
                {level.plan}
              </div>
            </div>
          ))}
        </div>

        {/* Animated Counter */}
        <div className={`mt-12 ${isInView ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'}`}>
          <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-6">
            <p className="text-white/80 text-sm mb-2">Total já doado pela comunidade Viva Leve</p>
            <div className="text-4xl sm:text-5xl font-bold text-white">
              <AnimatedCounter target={127450} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
