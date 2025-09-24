import { Entity } from 'typeorm'

@Entity() 
export class MetaOption {
  id: number


  metaValue: string


  createDate: Date


  updateDate: Date
}