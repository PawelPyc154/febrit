/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react'

export type DialogContextValue = {
  isOpenDialog: boolean
  setIsOpenDialog: Dispatch<SetStateAction<boolean>>
}

const DialogContext = createContext<DialogContextValue | null>(null)

interface DialogProviderProps {
  // eslint-disable-next-line no-unused-vars
  children: (contextValue: DialogContextValue) => ReactNode
}
const DialogProvider = ({ children }: DialogProviderProps) => {
  const [isOpenDialog, setIsOpenDialog] = useState(false)

  return (
    <DialogContext.Provider value={{ isOpenDialog, setIsOpenDialog }}>
      {children({ isOpenDialog, setIsOpenDialog })}
    </DialogContext.Provider>
  )
}

const useDialogContext = () => {
  const context = useContext(DialogContext)
  if (!context) {
    throw new Error('useDialogContext must be used within a DialogProvider')
  }
  return context
}

export { DialogProvider, useDialogContext }
