import { Controller, Get, Param } from '@nestjs/common'
import { PostsService } from './providers/posts.service';

@Controller('posts')
export class PostsController {
  constructor(
    private readonly postService: PostsService
  ) { }
  
  // Practise Only - Inter Dependencies
  @Get()
  public getPosts(@Param('userId') userID: string) { }
}
