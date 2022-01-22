/* eslint-disable no-unused-vars */
import { DialogOverlay, DialogContent } from '@reach/dialog'
import '@reach/dialog/styles.css'
import { ReactNode } from 'react'
import { MdClose } from 'react-icons/md'
import tw from 'twin.macro'
import { Heading } from '../heading'
import 'styled-components/macro'
import { DialogContextValue, DialogProvider } from './dialogProvider'

interface DialogProps {
  trigger: ReactNode
  children: (contextValue: DialogContextValue) => ReactNode
  title: string
}
const Dialog = ({ children, trigger, title }: DialogProps) => (
  <DialogProvider>
    {({ isOpenDialog, setIsOpenDialog }) => (
      <>
        <button type="button" onClick={() => setIsOpenDialog(true)}>
          {trigger}
        </button>
        {isOpenDialog && (
          <DialogOverlay onClick={() => setIsOpenDialog(false)}>
            <DialogContentStyled>
              <TitleWrapper size="lg" tag="h1">
                {title}
                <CloseButton color="gray" type="button" onClick={() => setIsOpenDialog(false)}>
                  <MdClose size="26" />
                </CloseButton>
              </TitleWrapper>
              <ContentWrapper>{children({ isOpenDialog, setIsOpenDialog })}</ContentWrapper>
            </DialogContentStyled>
          </DialogOverlay>
        )}
      </>
    )}
  </DialogProvider>
)

export { Dialog }

const DialogContentStyled = tw(DialogContent)`rounded-md !p-0 relative bg-gray-100`
const TitleWrapper = tw(Heading)`border-b border-gray-300 py-4 pl-6 pr-4 relative`
const ContentWrapper = tw.div`p-6`
const CloseButton = tw.button`p-2 absolute right-2 top-1/2 -translate-y-1/2`
