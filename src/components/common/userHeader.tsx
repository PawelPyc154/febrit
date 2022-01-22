import { useQuery, gql } from '@apollo/client'
import { ReactNode } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import tw from 'twin.macro'
import { MdOutlineArrowBack } from 'react-icons/md'
import Skeleton from 'react-loading-skeleton'
import { Heading } from './heading'
import { IconButton } from '../form/iconButton'
import { Error } from './error'
import 'styled-components/macro'

type UserResponse = { user: { name: string } }

interface UserHeaderProps {
  action: ReactNode
}
const UserHeader = ({ action }: UserHeaderProps) => {
  const { userId } = useParams<{ userId: string }>()
  const { data, error, loading } = useQuery<UserResponse>(
    gql`
      query {
        user(id: ${userId}) {
          name
        }
      }
    `,
    {},
  )
  const user = data?.user
  const navigate = useNavigate()

  if (error) return <Error />

  return (
    <HeaderWrapper>
      <IconButton color="white" onClick={() => navigate(-1)}>
        <MdOutlineArrowBack size={26} />
      </IconButton>

      {loading ? (
        <Skeleton width={300} height={30} />
      ) : (
        <Heading tag="h1" size="3xl">
          {user?.name}
        </Heading>
      )}
      {action}
    </HeaderWrapper>
  )
}

export { UserHeader }

const HeaderWrapper = tw.header`flex justify-between items-center`
