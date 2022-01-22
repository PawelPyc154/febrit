import { useQuery, gql } from '@apollo/client'
import { BiTrash } from 'react-icons/bi'

import { UserHeader } from '../components/common/userHeader'
import { IconButton } from '../components/form/iconButton'
import 'styled-components/macro'
import { Error } from '../components/common/error'

type PostResponse = { post: { title: string; body: string } }

const PostDetails = () => {
  const { error, data } = useQuery<PostResponse>(
    gql`
      query {
        post(id: 1) {
          title
          body
        }
      }
    `,
    {},
  )

  const post = data?.post

  if (error || !post) return <Error />

  return (
    <div>
      <UserHeader
        action={
          <IconButton color="green">
            <BiTrash size={26} />
          </IconButton>
        }
      />
      <div>{post?.title}</div>
      <div>{post?.body}</div>
    </div>
  )
}

export { PostDetails }
