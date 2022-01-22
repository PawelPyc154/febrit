import { Control, FieldPath, FieldValues, RegisterOptions, useController } from 'react-hook-form'
import { Input } from './input'

type InputControlProps<TFieldValues extends FieldValues = object> = {
  control: Control<TFieldValues, object>
  name: FieldPath<TFieldValues>
  rules?: RegisterOptions
  label?: string
}

const InputControl = <TFieldValues extends FieldValues = object>({
  control,
  name,
  rules,
  ...props
}: InputControlProps<TFieldValues>) => {
  const { field, fieldState } = useController({
    control,
    name,
    rules,
  })
  return <Input {...props} {...field} error={fieldState.error} />
}

export { InputControl }
