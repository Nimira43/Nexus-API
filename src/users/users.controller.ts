import { Controller, Get, Post, Patch, Put, Delete } from '@nestjs/common'

@Controller('users')
export class UsersController {
  @Get()
  public getUsers() {
    return 'Confirmed: Sent Get request to users endpoint'
  }
  @Post()
  public createUsers() {
    return 'Confirmed: Sent Create request to users endpoint'
  }
}
