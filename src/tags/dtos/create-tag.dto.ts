import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { IsJSON, IsNotEmpty, IsOptional, IsString, Matches, MaxLength, MinLength } from 'class-validator'

export class CreateTagDto {
  @ApiProperty()
  @IsString()
  @MinLength(3)
  @IsNotEmpty()
  @MaxLength(256)
  name: string

  @ApiProperty({
    description: "Example slug (url): 'example-url'",
    example: "my-blog-post"
  })
  @IsString()
  @IsNotEmpty()
  @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
    message: "A slug should be all small letters and use only '-' and no spaces. Example: 'my-url'."
  })
  @MaxLength(256)
  slug: string
  
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string
  
  @ApiPropertyOptional()
  @IsOptional()
  @IsJSON()
  schema?: string
  
  
  featuredImageUrl?: string
}