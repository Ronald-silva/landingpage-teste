import { useState, useEffect } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import Section from './ui/Section'
import Card from './ui/Card'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Maria Silva',
      initials: 'MS',
      area: 'Direito Trabalhista',
      text: 'A Dra. Lara Kheir foi fundamental para que eu conseguisse meus direitos trabalhistas. Profissionalismo e dedicação impecáveis!',
      rating: 5,
    },
    {
      name: 'João Santos',
      initials: 'JS',
      area: 'Direito Previdenciário',
      text: 'Excelente advogada! Me ajudou a conquistar minha aposentadoria com toda atenção e cuidado que eu precisava.',
      rating: 5,
    },
    {
      name: 'Ana Costa',
      initials: 'AC',
      area: 'Direito Trabalhista',
      text: 'Profissional extremamente competente e atenciosa. Conseguiu reverter minha demissão por justa causa. Recomendo!',
      rating: 5,
    },
    {
      name: 'Pedro Oliveira',
      initials: 'PO',
      area: 'Direito Cível',
      text: 'Atendimento rápido e eficiente. A Dra. Lara sempre esteve disponível para esclarecer minhas dúvidas.',
      rating: 5,
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, testimonials.length])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <Section background="white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary mb-4">
          O Que Dizem Nossos Clientes
        </h2>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
          A satisfação de quem confiou em nosso trabalho
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Main Testimonial Card */}
          <Card padding="lg" className="shadow-xl">
            <div className="relative">
              {/* Quote Icon */}
              <Quote className="absolute -top-2 -left-2 w-16 h-16 text-secondary/10" />

              <div className="relative space-y-6">
                {/* Stars */}
                <div className="flex justify-center gap-1">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-secondary text-secondary" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-xl md:text-2xl text-text-primary text-center font-medium leading-relaxed px-4">
                  "{testimonials[currentIndex].text}"
                </p>

                {/* Author Info */}
                <div className="flex flex-col items-center gap-4 pt-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {testimonials[currentIndex].initials}
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-lg text-text-primary">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-sm text-text-secondary">
                      {testimonials[currentIndex].area}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 group"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 group"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAutoPlaying(false)
                setCurrentIndex(index)
              }}
              className="min-w-[44px] min-h-[44px] flex items-center justify-center p-2 transition-all duration-300"
              aria-label={`Go to testimonial ${index + 1}`}
              aria-current={index === currentIndex ? 'true' : 'false'}
            >
              <span
                className={`rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-secondary w-8 h-3'
                    : 'bg-gray-300 hover:bg-gray-400 w-3 h-3'
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </Section>
  )
}
