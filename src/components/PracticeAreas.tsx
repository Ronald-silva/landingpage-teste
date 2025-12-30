import { Briefcase, Shield, Scale, Gavel, Check } from 'lucide-react'
import Section from './ui/Section'
import { Accordion, AccordionItem } from './ui/Accordion'
import Button from './ui/Button'

export default function PracticeAreas() {
  const handleWhatsAppClick = (area: string) => {
    const phoneNumber = '5534999667834'
    const message = encodeURIComponent(`Olá! Vim do site e gostaria de saber mais sobre ${area}.`)
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }

  const areas = [
    {
      title: 'Direito Trabalhista',
      subtitle: 'Nossa Especialidade Principal',
      icon: <Briefcase className="w-5 h-5 text-white" />,
      services: [
        'Rescisão de contrato e verbas rescisórias',
        'Horas extras não pagas',
        'Assédio moral e sexual no ambiente de trabalho',
        'Acidentes de trabalho e doenças ocupacionais',
        'Reconhecimento de vínculo empregatício',
        'Diferenças salariais e equiparação salarial',
        'Reversão de justa causa',
        'Adicional de insalubridade e periculosidade',
        'Estabilidade gestante e acidentária',
      ],
      defaultOpen: true,
    },
    {
      title: 'Direito Previdenciário',
      subtitle: 'Seus Benefícios Garantidos',
      icon: <Shield className="w-5 h-5 text-white" />,
      services: [
        'Aposentadoria por tempo de contribuição',
        'Aposentadoria por idade',
        'Aposentadoria especial',
        'Auxílio-doença e auxílio-acidente',
        'Pensão por morte',
        'BPC/LOAS (Benefício de Prestação Continuada)',
        'Revisão de benefícios',
        'Recursos contra negativas do INSS',
      ],
      defaultOpen: false,
    },
    {
      title: 'Direito Cível',
      subtitle: 'Proteção Completa dos Seus Direitos',
      icon: <Scale className="w-5 h-5 text-white" />,
      services: [
        'Contratos em geral',
        'Direito do consumidor',
        'Indenizações por danos morais e materiais',
        'Ações de cobrança',
        'Direito de família (pensão alimentícia, divórcio)',
        'Inventário e planejamento sucessório',
        'Usucapião',
      ],
      defaultOpen: false,
    },
    {
      title: 'Direito Criminal',
      subtitle: 'Defesa Técnica e Eficaz',
      icon: <Gavel className="w-5 h-5 text-white" />,
      services: [
        'Defesa criminal em todas as fases',
        'Recursos em tribunais superiores',
        'Habeas corpus',
        'Liberdade provisória',
        'Revisão criminal',
        'Acompanhamento em audiências',
      ],
      defaultOpen: false,
    },
  ]

  return (
    <Section background="light" id="areas-atuacao">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary mb-4">
          Expertise Completa Para Defender Seus Direitos
        </h2>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
          Atuação especializada em diversas áreas do direito para oferecer a melhor solução jurídica
        </p>
      </div>

      <Accordion className="max-w-4xl mx-auto">
        {areas.map((area, index) => (
          <AccordionItem
            key={index}
            title={area.title}
            icon={area.icon}
            defaultOpen={area.defaultOpen}
          >
            <div className="space-y-4">
              <p className="text-secondary font-semibold">{area.subtitle}</p>

              <ul className="space-y-3">
                {area.services.map((service, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-text-secondary">{service}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4">
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => handleWhatsAppClick(area.title)}
                >
                  Consultar sobre {area.title}
                </Button>
              </div>
            </div>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  )
}
