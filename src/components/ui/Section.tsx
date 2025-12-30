import { ReactNode } from 'react'
import { clsx } from 'clsx'
import Container from './Container'

interface SectionProps {
  children: ReactNode
  className?: string
  background?: 'white' | 'light' | 'primary' | 'gradient'
  padding?: 'sm' | 'md' | 'lg'
  id?: string
}

export default function Section({
  children,
  className,
  background = 'white',
  padding = 'lg',
  id,
}: SectionProps) {
  const backgrounds = {
    white: 'bg-white',
    light: 'bg-background-light',
    primary: 'bg-primary',
    gradient: 'bg-gradient-to-br from-primary via-primary-light to-primary-dark',
  }

  const paddings = {
    sm: 'py-12',
    md: 'py-16',
    lg: 'py-20',
  }

  return (
    <section id={id} className={clsx(backgrounds[background], paddings[padding], className)}>
      <Container>{children}</Container>
    </section>
  )
}
