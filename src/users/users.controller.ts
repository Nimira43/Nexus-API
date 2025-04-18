import {
  Controller,
  Get,
  Post,
  Patch,
  Put,
  Delete,
  Param,
  Query,
  Body,
  ParseIntPipe,
  DefaultValuePipe,
  Headers,
  Ip,
} from '@nestjs/common'
import { CreateUserDto } from './dtos/create-user.dto'

@Controller('users')
export class UsersController {

  @Get('/:id?')
  public getUsers(
    @Param(
      'id',
      ParseIntPipe
    ) id: number | undefined,
    @Query(
      'limit',
      new DefaultValuePipe(10),
      ParseIntPipe
    ) limit: number,
    @Query(
      'page',
      new DefaultValuePipe(1),
      ParseIntPipe
    ) page: number
  ) {
    console.log(limit)
    console.log(page)
    return 'You sent a get request to users endpoint'
  }
  
  @Post()
  public createUsers(
    @Body() createUserDto: CreateUserDto,
    )  {
    console.log(createUserDto instanceof CreateUserDto)
    return 'You sent a post request to users endpoint'
  }
}
