import { createElement, ReactNode } from 'react'

interface TagProps {
  tag: 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
  children: ReactNode
}
const Tag = ({ tag, children, ...props }: TagProps) =>
  createElement(tag || 'div', { ...props }, children)

export { Tag }
