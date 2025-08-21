import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { PostsService } from './providers/posts.service'
import { ApiResponse, ApiTags } from '@nestjs/swagger'
import { CreatePostDto } from './dtos/create-post.dto'

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
  @ApiResponse({})
  @Post()
  public createPost(@Body() createPostDto: CreatePostDto) {
    console.log(createPostDto)
  }
}


