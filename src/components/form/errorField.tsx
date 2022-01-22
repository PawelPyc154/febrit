import { FieldError } from 'react-hook-form'
import tw from 'twin.macro'

const errors = { required: 'This field is required' }
interface ErrorFieldProps {
  error?: FieldError
}
const ErrorField = ({ error }: ErrorFieldProps) => {
  const geError = () => Object.entries(errors).find(([key]) => error?.type === key)?.[1]

  if (error && !geError()) {
    throw new Error(`Please add property "${error?.type}" to errors object`)
  }
  return error ? <Container>{geError()}</Container> : null
}

export { ErrorField }

const Container = tw.div` text-red-500 w-full rounded-sm z-0`
