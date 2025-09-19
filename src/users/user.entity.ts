import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    type: 'varchar',
    length: 96,
    nullable: false,
  })
  firstName: string

  @Column()
  lastName: string
  
  @Column()
  email: string
  
  @Column()
  password: string
}