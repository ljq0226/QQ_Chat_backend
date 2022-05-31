import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateFriendDto {
  //class-validator还有其它很多限制条件 请查阅官网
  @ApiProperty({ description: '自己QQ' })
  @IsNotEmpty({ message: '请输入自己QQ' })
  selfQQ: number;

  @ApiProperty({ description: '好友QQ' })
  @IsNotEmpty({ message: '请输入好友QQ' })
  friendQQ: number;

  @ApiProperty({ description: '密码', default: '1' })
  @IsNotEmpty()
  grouping: number;
}
