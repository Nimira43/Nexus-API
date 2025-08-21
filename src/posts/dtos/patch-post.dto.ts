import { ApiProperty } from '@nestjs/swagger'
import { IsInt, IsNotEmpty } from 'class-validator'

export class PatchPostDto {
  @ApiProperty()
  @IsInt()
  @IsNotEmpty()
  id: number;
}