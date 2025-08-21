import { PartialType } from '@nestjs/mapped-types'
import { ApiProperty } from '@nestjs/swagger'
import { IsInt, IsNotEmpty } from 'class-validator'
import { CreatePostDto } from './create-post.dto'

export class PatchPostDto extends PartialType(CreatePostDto){
  @ApiProperty({
    description: 'The ID of the post that needs to be updated.',
  })
  @IsInt()
  @IsNotEmpty()
  id: number;
}