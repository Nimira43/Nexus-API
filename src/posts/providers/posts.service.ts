import { Injectable } from '@nestjs/common'

@Injectable()
export class PostsService {
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
