import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateChatRecordDto {
  @ApiProperty({ description: '发送者QQ' })
  @IsNotEmpty()
  senderQQ: number;
  @ApiProperty({ description: '接受者QQ' })
  @IsNotEmpty()
  receiverQQ: number;
  @ApiProperty({ description: '发送内容' })
  @IsNotEmpty()
  chatContent: string;
}
