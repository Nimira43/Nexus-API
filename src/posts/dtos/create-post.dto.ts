import { IsArray, IsEnum, IsISO8601, IsJSON, IsNotEmpty, IsOptional, IsString, IsUrl, Matches, MinLength, ValidateNested } from 'class-validator'
import { postStatus } from '../enums/postStatus.enum'
import { postType } from '../enums/postType.enum'
import { CreatePostMetaOptionsDto } from './create-post-meta-options.dto'
import { Type } from 'class-transformer'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'

export class CreatePostDto {
  @ApiProperty({
    example:"This Is An Example Title",
    description: "This is the title for the blog post.",
  })
  @IsString()
  @MinLength(4)
  @IsNotEmpty()
  title: string

  @ApiProperty({
    enum: postType,
    description: "Possible post types include: 'post', 'page', 'story' or 'series'."
  })
  @IsEnum(postType)
  @IsNotEmpty()
  postType: postType

  @ApiProperty({
    description: "Example slug (url): 'example-url'",
    example: "my-blog-post"
  })
  @IsString()
  @IsNotEmpty()
  @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
    message: "A slug should be all small letters and use only '-' and no spaces. Example: 'my-url'."
  })
  slug: string

  @ApiProperty({
    enum: postStatus,
    description: "Possible status types include: 'draft', 'scheduled', 'review' or 'published'."
  })
  @IsEnum(postStatus)
  @IsNotEmpty()
  status: postStatus

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  content?: string
  
  @IsOptional()
  @IsJSON()
  schema?: string
  
  @IsOptional()
  @IsUrl()
  featuredImageUrl?: string
  
  @IsISO8601()
  @IsOptional()
  publishOn?: Date
  
  @IsOptional()
  @IsArray()
  @IsString({
    each: true
  })
  @MinLength(3, {
    each: true
  })
  tags?: string[]
  
  @IsOptional()
  @IsArray()
  @ValidateNested({
    each: true
  })
  @Type(() => CreatePostMetaOptionsDto)
  metaOptions: CreatePostMetaOptionsDto[]
}