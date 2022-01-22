import { gql, useQuery } from '@apollo/client'
import { Link } from 'react-router-dom'
import tw from 'twin.macro'
import Skeleton from 'react-loading-skeleton'
import { Heading } from '../components/common/heading'
import 'styled-components/macro'
import { LinkBase } from '../components/common/linkBase'
import { Button } from '../components/form/button'
import { Error } from '../components/common/error'
import { NoResources } from '../components/common/noResources'

type Company = {
  name: string
  catchPhrase: string
  bs: string
}
type User = {
  id: number
  name: string
  email: string
  phone: string
  website: string
  company: Company
}
type UsersResponse = { users: { data: User[] } }

const Home = () => {
  const { loading, error, data } = useQuery<UsersResponse>(
    gql`
      query {
        users(options: { paginate: { page: 1, limit: 8 } }) {
          data {
            id
            name
            email
            phone
            website
            company {
              name
              catchPhrase
              bs
            }
          }
        }
      }
    `,
    {},
  )

  const users = data?.users.data

  if (loading) {
    return (
      <UsersList>
        {Array.from(Array(8).keys()).map((item) => (
          <UsersItem key={item}>
            <Skeleton />
            <div>
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </div>
            <CompanyWrapper>
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </CompanyWrapper>
            <Skeleton height={62} />
          </UsersItem>
        ))}
      </UsersList>
    )
  }

  if (error || !users) return <Error />

  if (!users.length) return <NoResources />

  return (
    <UsersList>
      {users.map(({ id, name, email, phone, website, company }) => (
        <UsersItem key={id}>
          <Heading tag="h1" size="base">
            {name}
          </Heading>
          <div>
            <LinkBase tw="block" href={`mailto:${email}`}>
              {email}
            </LinkBase>
            <LinkBase tw="block" href={`tel:${phone}`}>
              {phone}
            </LinkBase>
            <LinkBase
              tw="block"
              href={`https://www.${website}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {website}
            </LinkBase>
          </div>
          <CompanyWrapper>
            <div>{company.name}</div>
            <div>{company.catchPhrase}</div>
            <div>{company.bs}</div>
          </CompanyWrapper>
          <Link to={`/user/${id}`}>
            <Button tw="w-full mt-6">Details</Button>
          </Link>
        </UsersItem>
      ))}
    </UsersList>
  )
}

export { Home }

const UsersList = tw.div`grid gap-6 lg:(grid-cols-2 gap-10) xl:(grid-cols-4 ) 2xl:(gap-20)`
const UsersItem = tw.div`p-6 bg-white border-2 border-green-600 rounded-md flex flex-col gap-4`
const CompanyWrapper = tw.div`flex-grow`
