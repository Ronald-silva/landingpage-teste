import { Scale, MapPin, Phone, Instagram, ExternalLink } from 'lucide-react'
import Container from './ui/Container'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer Content */}
      <Container className="py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {/* Column 1 - Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Scale className="w-8 h-8 text-secondary" />
              <div>
                <h3 className="text-xl font-heading font-bold">Dra. Lara Kheir</h3>
                <p className="text-xs text-white/70">Advocacia</p>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Defendendo seus direitos com ética, dedicação e excelência jurídica. Atendimento
              humanizado e resultados concretos.
            </p>
            <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-lg w-fit">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              <span className="text-xs font-medium">OAB/MG - Especialista</span>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('sobre')}
                  className="text-white/80 hover:text-secondary transition-colors text-sm flex items-center gap-2"
                >
                  <span className="w-1 h-1 bg-secondary rounded-full"></span>
                  Sobre
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('areas-atuacao')}
                  className="text-white/80 hover:text-secondary transition-colors text-sm flex items-center gap-2"
                >
                  <span className="w-1 h-1 bg-secondary rounded-full"></span>
                  Áreas de Atuação
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('calculator')}
                  className="text-white/80 hover:text-secondary transition-colors text-sm flex items-center gap-2"
                >
                  <span className="w-1 h-1 bg-secondary rounded-full"></span>
                  Calculadora
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('faq')}
                  className="text-white/80 hover:text-secondary transition-colors text-sm flex items-center gap-2"
                >
                  <span className="w-1 h-1 bg-secondary rounded-full"></span>
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://wa.me/5534999667834"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-secondary transition-colors text-sm flex items-start gap-3 group"
                >
                  <Phone className="w-5 h-5 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="font-medium text-white">WhatsApp</div>
                    <div>(34) 99966-7834</div>
                  </div>
                </a>
              </li>
              <li>
                <div className="text-white/80 text-sm flex items-start gap-3">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-medium text-white">Endereço</div>
                    <div>Av. 107, nº 224, Centro</div>
                    <div>Capinópolis-MG</div>
                  </div>
                </div>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/adv.larakheir/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-secondary transition-colors text-sm flex items-start gap-3 group"
                >
                  <Instagram className="w-5 h-5 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="font-medium text-white">Instagram</div>
                    <div>@adv.larakheir</div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="https://bit.ly/larakheiradvocacia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-secondary transition-colors text-sm flex items-start gap-3 group"
                >
                  <ExternalLink className="w-5 h-5 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="font-medium text-white">Link Alternativo</div>
                    <div>bit.ly/larakheiradvocacia</div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <Container className="py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-white/60 text-center md:text-left">
            <div>
              <p>
                © {currentYear} Dra. Lara Kheir Advocacia. Todos os direitos reservados.
              </p>
            </div>
            <div className="md:text-right">
              <p className="text-xs">
                Desenvolvido com excelência
              </p>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  )
}
