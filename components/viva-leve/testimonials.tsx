"use client"

import { useState } from "react"
import { useInView } from "@/hooks/use-in-view"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Renato Cariani",
    plan: "Plano Equilíbrio",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd7a-nYD-OP_TMA5zR3lNWOkiyGqjJTsPG4Q&s",
    text: "A Viva Leve transformou minha rotina. Finalmente encontrei um jeito prático de cuidar da minha saúde sem culpa e sem pressão."
  },
  {
    name: "Cristiano Ronaldo",
    plan: "Plano Viva Pleno",
    image: "https://www.ogol.com.br/img/jogadores/new/15/79/1579_cristiano_ronaldo_20251228003106.png",
    text: "As consultas online são incríveis! Tenho acompanhamento personalizado que cabe na minha agenda corrida de executivo."
  },
  {
    name: "Virgínia Fonseca",
    plan: "Plano Essencial",
    image: "https://yt3.googleusercontent.com/7gEtAHi63LAYgz4HmaB-m-Y4VZUGLFOJofq3MluJUKanwYlf19WnxzD2QgOYleS6uxEdsipjNw=s900-c-k-c0x00ffffff-no-rj",
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
          <h2 className="text-3xl sm:text-4xl font-bold text-[#4E8C3F] text-balance">
            Quem já vive mais leve
          </h2>
        </div>

        {/* Desktop Grid */}
        <div className={`hidden md:grid md:grid-cols-3 gap-8 ${isInView ? 'animate-fade-in-up animation-delay-100' : 'opacity-0'}`}>
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white/50 backdrop-blur-[8px] border border-white/30 rounded-2xl p-6 border-l-4 border-l-[#A85438] shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <Quote className="w-8 h-8 text-[#A85438]/30 mb-4" />
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
                  <div className="font-semibold text-[#4E8C3F]">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-[#A85438]">
                    {testimonial.plan}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className={`md:hidden ${isInView ? 'animate-fade-in-up animation-delay-100' : 'opacity-0'}`}>
          <div className="bg-white/50 backdrop-blur-[8px] border border-white/30 rounded-2xl p-6 border-l-4 border-l-[#A85438] shadow-sm">
            <Quote className="w-8 h-8 text-[#A85438]/30 mb-4" />
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
                <div className="font-semibold text-[#4E8C3F]">
                  {testimonials[current].name}
                </div>
                <div className="text-sm text-[#A85438]">
                  {testimonials[current].plan}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-[#4E8C3F]/10 hover:bg-[#4E8C3F]/20 flex items-center justify-center transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5 text-[#4E8C3F]" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === current ? 'bg-[#4E8C3F] w-6' : 'bg-[#4E8C3F]/30'
                  }`}
                  aria-label={`Depoimento ${idx + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-[#4E8C3F]/10 hover:bg-[#4E8C3F]/20 flex items-center justify-center transition-colors"
              aria-label="Próximo"
            >
              <ChevronRight className="w-5 h-5 text-[#4E8C3F]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
