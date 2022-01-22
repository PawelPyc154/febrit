import tw, { styled } from 'twin.macro'
import 'styled-components/macro'

const colors = {
  // white: tw`bg-white text-black hover:(bg-black text-white)`,
  green: tw`bg-green-600 hover:bg-green-700`,
}
const sizes = {
  base: tw`h-12 text-base`,
  '2xl': tw`h-16 text-lg`,
}

interface ButtonProps {
  color?: keyof typeof colors
  size?: keyof typeof sizes
}

const Button = styled.button<ButtonProps>(({ color = 'green', size = 'base' }) => [
  tw` disabled:(opacity-30 pointer-events-none) rounded-md text-white font-medium shadow-lg px-4 flex items-center justify-center`,
  colors[color],
  sizes[size],
])

export { Button }
