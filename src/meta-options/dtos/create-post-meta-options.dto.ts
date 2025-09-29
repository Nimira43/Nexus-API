import { IsJSON, IsNotEmpty, IsObject } from 'class-validator'
// import { Type } from 'class-transformer'

export class CreatePostMetaOptionsDto {
  @IsNotEmpty()
  @IsJSON()
  metaValue: string

  // @IsNotEmpty()
  // @IsObject()
  // @Type(() => Object)
  // metaValue: Record<string, any>
}

