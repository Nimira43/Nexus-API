import { Controller, Get, Post, Patch, Put,Delete, Param, Query, Body, ParseIntPipe,DefaultValuePipe, Headers, Ip } from '@nestjs/common'
import { CreateUserDto } from './dtos/create-user.dto'
import { GetUsersParamDto } from './dtos/get-users-param.dto'
import { PatchUserDto } from './dtos/patch-user.dto'
import { UsersService } from './providers/users.service'

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
  ) { }

  @Get('/:id?')
  public getUsers(
    @Param() getUserParamDto: GetUsersParamDto,
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
    
    return this.usersService.findAll(getUserParamDto, limit, page)
  }
  
  @Post()
  public createUsers(
    @Body() createUserDto: CreateUserDto,
    )  {
    console.log(createUserDto instanceof CreateUserDto)

    return 'You sent a post request to users endpoint'
  }

  @Patch()
  public patchUser(@Body() patchUserDto: PatchUserDto) {
    return patchUserDto
  }
}
