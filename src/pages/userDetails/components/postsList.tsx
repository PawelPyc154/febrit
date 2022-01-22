import { useQuery, gql } from '@apollo/client'
import { BiTrash } from 'react-icons/bi'
import { MdKeyboardArrowRight } from 'react-icons/md'
import Skeleton from 'react-loading-skeleton'
import { Link, useParams } from 'react-router-dom'
import tw from 'twin.macro'
import { Error } from '../../../components/common/error'
import { NoResources } from '../../../components/common/noResources'
import { IconButton } from '../../../components/form/iconButton'

type UserResponse = {
  user: {
    posts: {
      data: Array<{
        title: string
        id: string
      }>
    }
  }
}

const PostsList = () => {
  const { userId } = useParams<{ userId: string }>()

  const { loading, error, data } = useQuery<UserResponse>(
    gql`
        query {
          user(id: ${userId}) {
            posts {
              data {
                title
                id
              }
            }
          }
        }
      `,
    {},
  )
  const posts = data?.user.posts.data

  if (loading) {
    return (
      <Container>
        {Array.from(Array(8).keys()).map((item) => (
          <Skeleton height={80} key={item} />
        ))}
      </Container>
    )
  }

  if (error || !posts) return <Error />

  if (!posts.length) return <NoResources />
  return (
    <Container>
      {posts?.map(({ id, title }) => (
        <PostItem key={id}>
          <IconButton color="gray" onClick={() => console.log('test')}>
            <BiTrash size={26} />
          </IconButton>

          <TitleWrapper>{title + title + title + title}</TitleWrapper>

          <Link to={id}>
            <IconButton color="gray" tw="ml-auto">
              <MdKeyboardArrowRight size={30} />
            </IconButton>
          </Link>
        </PostItem>
      ))}
    </Container>
  )
}

export { PostsList }

const Container = tw.div`grid gap-6 mt-10`
const PostItem = tw.div`border-2 border-green-600 rounded-md px-6 py-4 bg-white flex items-center gap-6 truncate`
const TitleWrapper = tw.div`truncate w-full`
