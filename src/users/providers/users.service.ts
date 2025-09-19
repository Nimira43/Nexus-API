import { Injectable } from '@nestjs/common'
import { GetUsersParamDto } from '../dtos/get-users-param.dto'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from '../user.entity'

/**
 * Class to connect to Users table and perform business operations
 */
@Injectable()
export class UsersService{
  constructor(

    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  public async createUser() {}

  /**
   * The method to get all the users from the database
   */
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
  /**
     * Finds a single user using the ID of the user
     */
  public findOneById(id: string) { 
    return {
      id: 1234,
      firstName: 'Fred',
      email: 'fred@user .com',
    }
  }
}