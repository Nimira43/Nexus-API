import { IsNotEmpty, IsOptional, IsString } from 'class-validator'

export class CreateUserDto { 
  @IsString()
  @IsNotEmpty()
  firstName: string

  @IsString()
  @IsOptional()
  lastName?: string
  
  @IsString()
  @IsNotEmpty()
  email: string
  
  @IsString()
  @IsNotEmpty()
  password: string
}

