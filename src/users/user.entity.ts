import { Column, Entity } from 'typeorm'

@Entity()
export class User {
  id: number
  @Column()
  firstName: string
  lastName: string
  email: string
  password: string
}