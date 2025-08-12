import { IsString } from 'class-validator'

export class CreatePostMetaOptionsDto {
  @IsString()
  key: string

  
  value: any
}