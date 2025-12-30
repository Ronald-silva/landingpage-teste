import { HelpCircle } from 'lucide-react'
import Section from './ui/Section'
import { Accordion, AccordionItem } from './ui/Accordion'

export default function FAQ() {
  const faqs = [
    {
      question: 'Como funciona a primeira consulta?',
      answer:
        'A primeira consulta é totalmente gratuita e sem compromisso. Você entra em contato, explica sua situação e fazemos uma análise preliminar do seu caso. Só então apresentamos uma proposta de honorários, se você decidir prosseguir.',
    },
    {
      question: 'Quanto custa a consultoria?',
      answer:
        'Os honorários variam de acordo com a complexidade do caso. Trabalhamos com valores fixos, percentuais sobre o êxito ou acordos personalizados. Tudo é combinado com transparência antes de iniciar o processo.',
    },
    {
      question: 'Quanto tempo demora um processo trabalhista?',
      answer:
        'O prazo varia bastante dependendo da complexidade do caso e da comarca. Em média, processos trabalhistas podem levar de 1 a 2 anos. No entanto, muitos casos são resolvidos por acordo em prazos bem menores.',
    },
    {
      question: 'Vocês atendem em todo Brasil?',
      answer:
        'Sim! Nosso atendimento é 100% digital, permitindo que possamos auxiliar clientes em todo território nacional. As consultas são feitas por WhatsApp, videochamada ou presencialmente (para quem está na região).',
    },
    {
      question: 'Como é o pagamento dos honorários?',
      answer:
        'Oferecemos diferentes modalidades: pagamento fixo parcelado, percentual sobre o valor conquistado (êxito), ou modelos mistos. Tudo é acordado previamente e de forma transparente, sem surpresas.',
    },
    {
      question: 'E se eu não ganhar o caso?',
      answer:
        'Quando trabalhamos com honorários de êxito, você só paga se ganhar. Nos demais modelos, o risco processual é explicado de forma clara antes de iniciar. Nossa experiência permite avaliar as reais chances de sucesso em cada caso.',
    },
    {
      question: 'Preciso ir até o escritório?',
      answer:
        'Não necessariamente. Todo o atendimento pode ser feito de forma digital. Documentos podem ser enviados por WhatsApp ou e-mail, e reuniões são realizadas por videochamada. Mas quem preferir, pode agendar atendimento presencial.',
    },
    {
      question: 'Quanto tempo após a demissão posso entrar com processo?',
      answer:
        'Para ações trabalhistas, você tem até 2 anos após o término do contrato de trabalho para entrar com a ação. Porém, quanto mais cedo procurar orientação jurídica, melhor para preservar provas e seus direitos.',
    },
  ]

  return (
    <Section background="light" id="faq">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <HelpCircle className="w-5 h-5 text-primary" />
            <span className="text-primary font-semibold">Tire suas dúvidas</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-text-secondary">
            Respostas para as dúvidas mais comuns dos nossos clientes
          </p>
        </div>

        <Accordion>
          {faqs.map((faq, index) => (
            <AccordionItem key={index} title={faq.question}>
              <p className="text-text-secondary leading-relaxed">{faq.answer}</p>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-8 text-center">
          <p className="text-text-secondary">
            Não encontrou a resposta que procurava?{' '}
            <button
              onClick={() => {
                const phoneNumber = '5534999667834'
                const message = encodeURIComponent('Olá! Tenho algumas dúvidas sobre os serviços.')
                window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
              }}
              className="text-primary font-semibold hover:text-primary-dark underline"
            >
              Entre em contato conosco
            </button>
          </p>
        </div>
      </div>
    </Section>
  )
}
