import { Company } from './company'

export type User = {
  id: number
  name: string
  email: string
  phone: string
  website: string
  company: Company
}
