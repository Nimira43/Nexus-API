import { IsString } from 'class-validator'
import { postStatus } from '../enums/postStatus.enum'
import { postType } from '../enums/postType.enum'

export class CreatePostDto {
  @IsString()
  title: string
  
  postType: postType
  slug: string
  status: postStatus
  content?: string
  schema?: string
  featuredImageUrl?: string
  publishOn?: Date
  tags?: string[]
  metaOptions: [
    {
      key: 'sidebarEnabled'
      value: true
    }
  ]

}