import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateLoginInfoDto {
  @ApiProperty({ description: '登录IP' })
  @IsNotEmpty()
  ipAddress: string;

  @ApiProperty({ description: '端口号' })
  @IsNotEmpty()
  portNumber: string;
}
