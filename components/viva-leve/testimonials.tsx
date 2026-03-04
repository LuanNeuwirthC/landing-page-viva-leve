"use client"

import { useState } from "react"
import { useInView } from "@/hooks/use-in-view"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Ana Silva",
    plan: "Plano Equilíbrio",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    text: "A Viva Leve transformou minha rotina. Finalmente encontrei um jeito prático de cuidar da minha saúde sem culpa e sem pressão."
  },
  {
    name: "Carlos Mendes",
    plan: "Plano Viva Pleno",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    text: "As consultas online são incríveis! Tenho acompanhamento personalizado que cabe na minha agenda corrida de executivo."
  },
  {
    name: "Mariana Costa",
    plan: "Plano Essencial",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    text: "Comecei com meditação e hoje pratico yoga todos os dias. A Viva Leve mudou minha relação com o autocuidado."
  }
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const { ref, isInView } = useInView()

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section id="depoimentos" className="py-16 lg:py-24 bg-viva-beige">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#4A7A5A] text-balance">
            Quem já vive mais leve
          </h2>
        </div>

        {/* Desktop Grid */}
        <div className={`hidden md:grid md:grid-cols-3 gap-8 ${isInView ? 'animate-fade-in-up animation-delay-100' : 'opacity-0'}`}>
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white rounded-2xl p-6 border-l-4 border-l-[#C4694A] shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <Quote className="w-8 h-8 text-[#C4694A]/30 mb-4" />
              <p className="text-[#333333] leading-relaxed mb-6">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-[#4A7A5A]">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-[#C4694A]">
                    {testimonial.plan}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className={`md:hidden ${isInView ? 'animate-fade-in-up animation-delay-100' : 'opacity-0'}`}>
          <div className="bg-white rounded-2xl p-6 border-l-4 border-l-viva-sage shadow-sm">
            <Quote className="w-8 h-8 text-[#C4694A]/30 mb-4" />
            <p className="text-[#333333] leading-relaxed mb-6">
              "{testimonials[current].text}"
            </p>
            <div className="flex items-center gap-4">
              <img
                src={testimonials[current].image}
                alt={testimonials[current].name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <div className="font-semibold text-[#4A7A5A]">
                  {testimonials[current].name}
                </div>
                <div className="text-sm text-[#C4694A]">
                  {testimonials[current].plan}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-[#4A7A5A]/10 hover:bg-[#4A7A5A]/20 flex items-center justify-center transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5 text-[#4A7A5A]" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === current ? 'bg-[#4A7A5A] w-6' : 'bg-[#4A7A5A]/30'
                  }`}
                  aria-label={`Depoimento ${idx + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-[#4A7A5A]/10 hover:bg-[#4A7A5A]/20 flex items-center justify-center transition-colors"
              aria-label="Próximo"
            >
              <ChevronRight className="w-5 h-5 text-[#4A7A5A]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
