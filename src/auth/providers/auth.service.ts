import { Injectable } from '@nestjs/common'
import { UsersService } from 'src/users/providers/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService
  ) {}

  public login(email: string, password: string, id: string) {

  }
}
