import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateLoginInfoDto {
  @ApiProperty({ description: 'QQ号' })
  @IsNotEmpty()
  qq: string;

  @ApiProperty({ description: '是否上线' })
  @IsNotEmpty()
  isAlive: boolean;

  @ApiProperty({ description: '登录IP' })
  @IsNotEmpty()
  ipAddress: string;

  @ApiProperty({ description: '端口号' })
  @IsNotEmpty()
  portNumber: number;
}
