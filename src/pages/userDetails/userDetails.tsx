import { MdOutlineAdd } from 'react-icons/md'
import { UserHeader } from '../../components/common/userHeader'
import { IconButton } from '../../components/form/iconButton'
import 'styled-components/macro'
import { PostsList } from './components/postsList'
import { Dialog } from '../../components/common/dialog/dialog'
import { AddPostForm } from './components/addPostForm'

const UserDetails = () => (
  <>
    <UserHeader
      action={
        <Dialog
          title="Add post"
          trigger={
            <IconButton color="green">
              <MdOutlineAdd size={30} />
            </IconButton>
          }
        >
          {() => <AddPostForm />}
        </Dialog>
      }
    />
    <PostsList />
  </>
)

export { UserDetails }
