import { Controller, Get } from '@nestjs/common'

@Controller('users')
export class UsersController {

  @Get()
  public getUsers() {
    return 'You sent a get request to users endpoint'
  }
}
