import { postStatus } from '../enums/postStatus.enum'
import { postType } from '../enums/postType.enum'

export class CreatePostDto {
  title: string
  postType: postType
  slug: string
  status: postStatus
}