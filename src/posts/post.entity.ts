import { Entity } from 'typeorm'
import { postType } from './enums/postType.enum'
import { postStatus } from './enums/postStatus.enum'

@Entity()
export class Post {
  title: string

  postType: postType

  slug: string

  status: postStatus
}