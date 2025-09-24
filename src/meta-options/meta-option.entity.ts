import { Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity() 
export class MetaOption {

  @PrimaryGeneratedColumn()
  id: number

  
  metaValue: string


  createDate: Date


  updateDate: Date
}