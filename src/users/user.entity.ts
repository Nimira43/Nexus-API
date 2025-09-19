import { Entity } from 'typeorm'

@Entity()
export class User {
  id: number
  firstName: string
  lastName: string
  email: string
  password: string
}