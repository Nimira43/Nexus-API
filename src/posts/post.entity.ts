import { Entity } from 'typeorm'
import { postType } from './enums/postType.enum'
import { postStatus } from './enums/postStatus.enum'
import { CreatePostMetaOptionsDto } from './dtos/create-post-meta-options.dto'

@Entity()
export class Post {
  id: number
  title: string
  postType: postType
  slug: string
  status: postStatus
  content?: string
  schema?: string
  featuredImageUrl?: string
  publishOn?: Date
  tags?: string[]
  metaOptions?: CreatePostMetaOptionsDto[]
}