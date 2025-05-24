import { Injectable } from '@nestjs/common'

@Injectable()
export class UsersService{

  public findAll() {
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