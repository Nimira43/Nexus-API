import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UsersModule } from './users/users.module'
import { PostsModule } from './posts/posts.module'
import { AuthModule } from './auth/auth.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UsersModule, 
    PostsModule, 
    AuthModule, 
    TypeOrmModule.forRoot({
      type: 'postgres',
      entities: [],
      synchronize: true,
      port: 5432,
      username: 'postgres',
      password: process.env.DB_PASSWORD,
      host: 'localhost',
      database: 'nexus-api'
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
