import { FormEventHandler, ReactNode } from 'react'
import tw from 'twin.macro'
import 'styled-components/macro'
import { Button } from '../../form/button'

interface DialogContentFormProps {
  children: ReactNode
  onSubmit: FormEventHandler<HTMLFormElement> | undefined
}

const DialogContentForm = ({ children, onSubmit }: DialogContentFormProps) => (
  <form onSubmit={onSubmit}>
    {children}
    <ButtonsWrapper>
      <Button color="gray">Close</Button>
      <Button type="submit">Save</Button>
    </ButtonsWrapper>
  </form>
)

export { DialogContentForm }

const ButtonsWrapper = tw.div`flex justify-end gap-6`
