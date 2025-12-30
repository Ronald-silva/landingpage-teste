import { ReactNode, CSSProperties } from 'react'
import { clsx } from 'clsx'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  padding?: 'sm' | 'md' | 'lg'
  style?: CSSProperties
}

export default function Card({ children, className, hover = false, padding = 'md', style }: CardProps) {
  const paddingStyles = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  }

  return (
    <div
      className={clsx(
        'bg-white rounded-lg shadow-md',
        hover && 'transition-all duration-300 hover:shadow-xl hover:-translate-y-1',
        paddingStyles[padding],
        className
      )}
      style={style}
    >
      {children}
    </div>
  )
}
