import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Tag {

  @PrimaryGeneratedColumn()
  id: number

  @Column({
    type: 'varchar',
    length: 256,
    nullable: false,
    unique: true,
  })
  name: string
  
  @Column({
    type: 'varchar',
    length: 512,
    nullable: false,
    unique: true,
  })
  slug: string
  
  @Column({
    type: 'text',
    nullable: true,
  })
  description?: string
  
  @Column({
    type: 'text',
    nullable: true,
  })
  schema?: string
  
  @Column({
    type: 'varchar',
    length: 1924,
    nullable: true,
  })
  featuredImageUrl?: string
  
  
  createDate: Date
  
  
  updateDate: Date
  
  
  deletedAt: Date
}

