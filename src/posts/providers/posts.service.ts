import { Injectable } from '@nestjs/common'
import { UsersService } from 'src/users/providers/users.service'

@Injectable()
export class PostsService {
  constructor(
    private readonly usersService: UsersService,
  ) {}
  public findAll(userId: string) {
    return [
      {
        title: 'NestJS DI is awesome!',
        content: 'Exploring dependency injection in NestJS...',
      },
      {
        title: 'Building Modular APIs',
        content: 'Understanding inter-modular dependencies in NestJS.',
      }
    ]
  }
}
