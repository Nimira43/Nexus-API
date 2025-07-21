import { Injectable } from '@nestjs/common'
import { GetUsersParamDto } from '../dtos/get-users-param.dto'

@Injectable()
export class UsersService{

  public findAll(
    getUserParamDto: GetUsersParamDto,
    limit: number, 
    page: number,
  ) {
    return [
      {
        firstName: 'Elsie',
        email: 'elsie@admin.com'
      },
      {
        firstName: 'Fred',
        email: 'fred@user.com'
      },
    ]
  }

  public findOneById(id: string) { 
    return {
      id: 1234,
      firstName: 'Fred',
      email: 'fred@user.com',
    }
  }
}