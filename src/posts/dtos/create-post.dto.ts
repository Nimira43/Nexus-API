import { postType } from '../enums/postType.enum'

export class CreatePostDto {
  title: string
  postType: postType
  slug: string
  status: string
}