/* eslint-disable react/button-has-type */
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import tw from 'twin.macro'
import 'styled-components/macro'

const colors = {
  white: tw`bg-gray-100 hover:bg-white`,
  gray: tw`bg-gray-100 hover:bg-gray-200`,
  green: tw`bg-green-600 hover:bg-green-700 text-white`,
}
type IconButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  color?: keyof typeof colors
}

const IconButton = ({ children, type = 'button', color = 'white', ...props }: IconButtonProps) => (
  <button
    type={type}
    css={[
      tw`rounded-md transition-colors h-11 w-11 flex items-center justify-center flex-shrink-0`,
      colors[color],
    ]}
    {...props}
  >
    {children}
  </button>
)

export { IconButton }
