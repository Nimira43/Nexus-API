import { Injectable, forwardRef, Inject } from '@nestjs/common'
import { GetUsersParamDto } from '../dtos/get-users-param.dto'
// import { AuthService } from 'src/auth/providers/auth.service'

/**
 * Class to connect to Users table and perform business operations
 */
@Injectable()
export class UsersService{
  // constructor(
  //   @Inject(forwardRef(() => AuthService))
  //   private readonly authService: AuthService
  // ) {}
  /**
   * The method to get all the users from the database
   */
  public findAll(
    getUserParamDto: GetUsersParamDto,
    limit: number, 
    page: number,
  ) {
    // const isAuth = this.authService.isAuth()
    // console.log(isAuth)

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
      email: 'fred@user.com',
    }
  }
}