import { Body, Controller, Post } from '@nestjs/common'
import { CreatePostMetaOptionsDto } from './dtos/create-post-meta-options.dto'

@Controller('meta-options')
export class MetaOptionsController {
  constructor(
    
  )

  @Post()
  public create(@Body() createPostMetaOptionsDto: CreatePostMetaOptionsDto) {

  }
}
