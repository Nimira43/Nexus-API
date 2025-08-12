import { IsArray, IsEnum, IsISO8601, IsJSON, IsNotEmpty, IsOptional, IsString, IsUrl, Matches, MinLength, ValidateNested } from 'class-validator'
import { postStatus } from '../enums/postStatus.enum'
import { postType } from '../enums/postType.enum'
import { CreatePostMetaOptionsDto } from './create-post-meta-options.dto'
import { Type } from 'class-transformer'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'

export class CreatePostDto {
  @ApiProperty({
    example:"An Example Title",
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

  @ApiPropertyOptional({
    description: "This is the content of the post",
    example: "Echoes of legacy ripple through circuits and code."
  })
  @IsString()
  @IsOptional()
  content?: string
  
  @ApiPropertyOptional({
    description: "Serialise your JSON object or else a validation error will be thrown.",
    example: "{\r\n \"@context\": \"https:\/\/schema.org\",\r\n \"@type\": \"Person\"\r\n}"
  })
  @IsOptional()
  @IsJSON()
  schema?: string
  
  @ApiPropertyOptional({
    description: "Featured image for your blog post.",
    example: "http://localhost.com/images/image1.jpg"
  })
  @IsOptional()
  @IsUrl()
  featuredImageUrl?: string
  
  @ApiPropertyOptional({
    description: "The date on which the blog post is published.",
    example: "2025-08-10T22:18:49+0000"
  })
  @IsISO8601()
  @IsOptional()
  publishOn?: Date
  
  @ApiPropertyOptional({
    description: "Array of tags passed as string values.",
    example: ['world', 'news', 'sport', 'health']
  })
  @IsOptional()
  @IsArray()
  @IsString({
    each: true
  })
  @MinLength(3, {
    each: true
  })
  tags?: string[]
  
  @ApiPropertyOptional({
    type: "array",
    required: false,
    items: {
      type: "object",
      properties: {
        key: {
          type: "string",
          description: "The key can be any string identifier for your meta option.",
          example: "sidebarEnabled"
        },
        value: {
          type: "any",
          description: "Any value that you want to save to the key.",
          example: "sidebarEnabled"
        },
      }
    },
    description: "",
    example: ""
  })
  @IsOptional()
  @IsArray()
  @ValidateNested({
    each: true
  })
  @Type(() => CreatePostMetaOptionsDto)
  metaOptions: CreatePostMetaOptionsDto[]
}