import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { PostsService } from './providers/posts.service'
import { ApiTags } from '@nestjs/swagger'

@Controller('posts')
@ApiTags('Posts')
export class PostsController {
  constructor(
    private readonly postService: PostsService
  ) { }
  
  // Practise Only - Inter Dependencies
  @Get('/:userId?')
  public getPosts(@Param('userId') userId: string) {
    return this.postService.findAll(userId)
  }

  @Post()
  public createPost(@Body()) {}
}


