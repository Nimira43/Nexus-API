import { Injectable } from '@nestjs/common'
import { UsersService } from 'src/users/providers/users.service'

@Injectable()
export class PostsService {
  constructor(
    private readonly usersService: UsersService,
  ) {}
  public findAll(userId: string) {
    const user = this.usersService.findOneById(userId)

    return [
      {
        user: user,
        title: 'NestJS DI is awesome!',
        content: 'Exploring dependency injection in NestJS...',
      },
      {
        user: user,
        title: 'Building Modular APIs',
        content: 'Understanding inter-modular dependencies in NestJS.',
      }
    ]
  }
}
