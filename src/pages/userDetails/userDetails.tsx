import { MdOutlineAdd } from 'react-icons/md'
import { UserHeader } from '../../components/common/userHeader'
import { IconButton } from '../../components/form/iconButton'
import 'styled-components/macro'
import { PostsList } from './components/postsList'
import { Dialog } from '../../components/common/dialog/dialog'
import { DialogContentForm } from '../../components/common/dialog/dialogContentForm'

const UserDetails = () => {
  const onSubmit = () => {
    console.log('test')
  }
  return (
    <>
      <UserHeader
        action={
          <Dialog
            title="Add post"
            trigger={
              <IconButton color="green" onClick={() => console.log('test')}>
                <MdOutlineAdd size={30} />
              </IconButton>
            }
          >
            {() => <DialogContentForm onSubmit={onSubmit}>test</DialogContentForm>}
          </Dialog>
        }
      />
      <PostsList />
    </>
  )
}

export { UserDetails }
