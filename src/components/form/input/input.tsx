import tw from 'twin.macro'
import { FieldError } from 'react-hook-form'
import { DetailedHTMLProps, forwardRef, InputHTMLAttributes } from 'react'
import { Label } from '../label'
import 'styled-components/macro'
import { ErrorField } from '../errorField'

type InputBaseProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export type InputProps = InputBaseProps & {
  label?: string
  error?: FieldError
}
const Input = forwardRef<HTMLInputElement, InputProps>(({ label, error, ...props }, ref) => (
  <Container>
    {label && <Label>{label}</Label>}
    <Wrapper css={[error && tw`ring-2 ring-red-500`]}>
      <input
        css={[tw` border px-4 h-11 flex items-center w-full pb-px rounded-md focus:outline-none`]}
        ref={ref}
        {...props}
      />
    </Wrapper>
    <ErrorField error={error} />
  </Container>
))

export { Input }

const Container = tw.div`text-sm w-full`
const Wrapper = tw.div` rounded-md border-gray-200 `
