import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ChatContentService } from './chat-content.service';
import { CreateChatContentDto } from './dto/create-chat-content.dto';
@ApiTags('聊天内容')
@Controller('chatContent')
export class ChatContentController {
  constructor(private readonly chatContentService: ChatContentService) {}
  @ApiOperation({ summary: '发送消息' })
  @Post()
  test(@Body() body: CreateChatContentDto) {
    return this.chatContentService.create(body);
  }
}
