import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateChatContentDto {
  @ApiProperty({ description: '消息内容' })
  @IsNotEmpty()
  content: string;
}
