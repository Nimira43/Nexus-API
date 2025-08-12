import { IsEnum, IsNotEmpty, IsString, Matches, MinLength } from 'class-validator'
import { postStatus } from '../enums/postStatus.enum'
import { postType } from '../enums/postType.enum'

export class CreatePostDto {
  @IsString()
  @MinLength(4)
  @IsNotEmpty()
  title: string

  @IsEnum(postType)
  @IsNotEmpty()
  postType: postType

  @IsString()
  @IsNotEmpty()
  @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
    message: 'A slug should be all small letters and use only "-" and no spaces. Example: "my-url".'
  })
  slug: string

  @IsEnum(postStatus)
  @IsNotEmpty()
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