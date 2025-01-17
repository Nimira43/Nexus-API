import { Controller, Get, Post, Patch, Put, Delete, Param } from '@nestjs/common'

@Controller('users')
export class UsersController {

  @Get('/:id')
  public getUsers(@Param() params: any) {
    console.log(params)
    return 'You sent a get request to users endpoint'
  }
  
  @Post()
  public createUsers() {
    return 'You sent a post request to users endpoint'
  }
}
