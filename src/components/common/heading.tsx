import { ReactNode } from 'react'
import tw from 'twin.macro'
import 'styled-components/macro'
import { Tag } from './tag'

const sizes = {
  base: tw`text-base`,
  lg: tw`text-lg`,
  xl: tw`text-xl`,
  '2xl': tw`text-2xl`,
  '3xl': tw`text-3xl`,
}
interface HeadingProps {
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
  children: ReactNode
  size: keyof typeof sizes
}

const Heading = ({ tag, children, size, ...props }: HeadingProps) => (
  <Tag tag={tag} css={[tw`font-semibold`, sizes[size]]} {...props}>
    {children}
  </Tag>
)

export { Heading }
