import { Entity } from 'typeorm'
import { postType } from './enums/postType.enum'

@Entity()
export class Post {
  title: string

  postType: postType
}