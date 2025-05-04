import { IsString, IsNotEmpty, MinLength, MaxLength, IsOptional, IsEmail, Matches } from 'class-validator'

export class PatchUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(96)
  firstName: string

  @IsString()
  @IsOptional()
  @MinLength(3)
  @MaxLength(96)
  lastName?: string
  
  @IsEmail()
  @IsNotEmpty()
  email: string
  
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @Matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, {
    message:
      'Password must have a minimum of eight 8 character with at least 1 letter, 1 number and 1 symbol.'
    } 
  )
  
  password: string
}