import { Controller, Post, Body } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ChatRecordService } from './chat-record.service';
import { CreateChatRecordDto } from './dto/create-chat-record.dto';
@ApiTags('聊天记录')
@Controller('chatRecord')
export class ChatRecordController {
  constructor(private readonly chatRecordService: ChatRecordService) {}
  @ApiOperation({ summary: '发送消息' })
  @Post('sendContent')
  create(@Body() body: CreateChatRecordDto) {
    return this.chatRecordService.sendContent(body);
  }
}
