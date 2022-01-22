import tw from 'twin.macro'
import 'styled-components/macro'
import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react'
import { Spinner } from '../common/spinner'

const colors = {
  gray: tw`bg-gray-100 text-black hover:bg-gray-200`,
  green: tw`bg-green-600 hover:bg-green-700`,
}
const sizes = {
  base: tw`h-12 text-base`,
  '2xl': tw`h-16 text-lg`,
}

type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  color?: keyof typeof colors
  size?: keyof typeof sizes
  isLoading?: boolean
}

const Button = ({ color = 'green', size = 'base', isLoading, children, ...props }: ButtonProps) => (
  <Container css={[colors[color], sizes[size], isLoading && tw`text-transparent`]} {...props}>
    {children}
    {isLoading && (
      <div tw="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Spinner />
      </div>
    )}
  </Container>
)

const Container = tw.button`disabled:(opacity-30 pointer-events-none) rounded-md text-white font-medium px-4 flex items-center justify-center`

export { Button }
