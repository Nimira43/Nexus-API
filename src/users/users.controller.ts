import { Controller, Get, Post, Patch, Put, Delete, Param, Query, Body, ParseIntPipe } from '@nestjs/common'

@Controller('users')
export class UsersController {

  @Get('/:id?')
  public getUsers(
    @Param('id', ParseIntPipe) id: number | undefined,
    @Query('limit', ParseIntPipe) limit: number,
    @Query('page', ParseIntPipe) page: number
  ) {
    console.log(typeof limit)
    console.log(typeof page)
    return 'You sent a get request to users endpoint'
  }
  
  @Post()
  public createUsers(@Body() request: any) {
    console.log(request)
    return 'You sent a post request to users endpoint'
  }
}
