import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger'
import { IsInt, IsNotEmpty } from 'class-validator'

export class PatchPostDto extends PartialType(){
  @ApiProperty({
    description: 'The ID of the post that needs to be updated.',
  })
  @IsInt()
  @IsNotEmpty()
  id: number;
}