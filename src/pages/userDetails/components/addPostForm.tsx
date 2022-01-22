import { gql, useMutation } from '@apollo/client'
import { useForm } from 'react-hook-form'
import { DialogContentForm } from '../../../components/common/dialog/dialogContentForm'
import { useDialogContext } from '../../../components/common/dialog/dialogProvider'
import { Error } from '../../../components/common/error'
import { InputControl } from '../../../components/form/input/inputControl'

interface FormValue {
  title: string
  body: string
}
const AddPostForm = () => {
  const { control, handleSubmit } = useForm<FormValue>()
  const { setIsOpenDialog } = useDialogContext()
  const [addPost, { loading, error }] = useMutation<FormValue>(
    gql`
      mutation ($input: CreatePostInput!) {
        createPost(input: $input) {
          id
          title
          body
        }
      }
    `,
    {
      onCompleted: () => {
        setIsOpenDialog(false)
      },
      refetchQueries: ['GetPosts'],
    },
  )

  const onSubmit = (value: FormValue) => {
    addPost({ variables: { input: value } })
  }

  if (error) return <Error />

  return (
    <DialogContentForm onSubmit={handleSubmit(onSubmit)} isLoading={loading}>
      <InputControl control={control} name="title" label="Title" rules={{ required: true }} />
      <InputControl control={control} name="body" label="Body" rules={{ required: true }} />
    </DialogContentForm>
  )
}

export { AddPostForm }
