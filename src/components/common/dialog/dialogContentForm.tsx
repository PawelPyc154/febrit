import { FormEventHandler, ReactNode } from 'react'
import tw from 'twin.macro'
import 'styled-components/macro'
import { Button } from '../../form/button'
import { useDialogContext } from './dialogProvider'

interface DialogContentFormProps {
  isLoading: boolean
  children: ReactNode
  onSubmit: FormEventHandler<HTMLFormElement> | undefined
}

const DialogContentForm = ({ children, onSubmit, isLoading }: DialogContentFormProps) => {
  const { setIsOpenDialog } = useDialogContext()
  return (
    <form onSubmit={onSubmit}>
      <FieldsWrapper>{children}</FieldsWrapper>
      <ButtonsWrapper>
        <Button color="gray" onClick={() => setIsOpenDialog(false)}>
          Close
        </Button>
        <Button type="submit" isLoading={isLoading}>
          Save
        </Button>
      </ButtonsWrapper>
    </form>
  )
}

export { DialogContentForm }

const ButtonsWrapper = tw.div`flex justify-end gap-6 pt-6`
const FieldsWrapper = tw.div`grid gap-4`
