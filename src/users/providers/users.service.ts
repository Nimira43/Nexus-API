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
        firstName: 'Nelson',
        email: 'nelson@mockdb.com'
      },
      {
        firstName: 'Ayrton',
        email: 'ayrton@pretenddb.com'
      },
    ]
  }

  public findOneById(id: number) { 
    return {
      id: 100,
      firstName: 'Ayrton',
      email: 'ayrton@pretenddb.com',
    }
  }
}