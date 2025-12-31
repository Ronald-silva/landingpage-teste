import { Scale, FileText, Building2, Shield, Award, Users } from 'lucide-react'
import Section from './ui/Section'

export default function AboutSection() {
  const expertise = [
    { icon: Scale, label: 'Direito Trabalhista' },
    { icon: FileText, label: 'Direito Previdenciário' },
    { icon: Building2, label: 'Direito Cível' },
    { icon: Shield, label: 'Direito Criminal' },
  ]

  const differentials = [
    { icon: Award, value: '5+', label: 'Anos de Experiência' },
    { icon: Users, value: '500+', label: 'Clientes Atendidos' },
  ]

  return (
    <Section background="white" id="sobre">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Column - Image */}
        <div className="order-2 lg:order-1">
          <div className="relative">
            {/* Background Decoration */}
            <div className="absolute -inset-4 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-2xl blur-xl"></div>

            {/* Image Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/5]">
                <img
                  src="/foto.png"
                  alt="Dra. Lara Kheir - Advogada Especialista"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* OAB Badge Overlay */}
              <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-lg shadow-lg">
                <div className="text-xs text-text-secondary">Registro</div>
                <div className="text-lg font-bold text-primary">OAB/MG</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="space-y-6 order-1 lg:order-2">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary mb-4">
              Conheça a Especialista Que Vai Defender Seus Direitos
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed">
              Com sólida formação e experiência consolidada, a Dra. Lara Kheir dedica-se
              integralmente à defesa dos direitos de seus clientes, oferecendo atendimento
              humanizado e estratégias jurídicas eficazes.
            </p>
          </div>

          {/* Expertise Areas */}
          <div>
            <h3 className="text-xl font-semibold text-text-primary mb-4">
              Áreas de Especialização
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {expertise.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-background-light rounded-lg hover:bg-background transition-colors"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm font-medium text-text-primary">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Differentials */}
          <div className="grid grid-cols-2 gap-6 pt-6">
            {differentials.map((item, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-xl border border-secondary/20"
              >
                <item.icon className="w-8 h-8 text-secondary mx-auto mb-2" />
                <div className="text-3xl font-bold text-primary mb-1">
                  {item.value}
                </div>
                <div className="text-sm text-text-secondary">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="pt-4">
            <p className="text-sm text-text-secondary italic">
              "Meu compromisso é lutar pelos seus direitos com dedicação, ética e transparência."
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}
