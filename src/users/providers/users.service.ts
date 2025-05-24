import { Injectable } from '@nestjs/common'
import { GetUsersParamDto } from '../dtos/get-users-param.dto'

@Injectable()
export class UsersService{

  public findAll(getUserParamDto: GetUsersParamDto) {
    return [
      {
        firstName: 'Nelson',
        email: 'nelson@mockdb.com'
      },
      {
        firstName: 'Ayrton',
        email: 'aryton@pretenddb.com'
      },
    ]
  }
}