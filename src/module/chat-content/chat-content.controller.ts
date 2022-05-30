import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ChatContentService } from './chat-content.service';
import { CreateChatContentDto } from './dto/create-chat-content.dto';
import { UpdateChatContentDto } from './dto/update-chat-content.dto';
@ApiTags('聊天内容')
@Controller('chat-content')
export class ChatContentController {
  constructor(private readonly chatContentService: ChatContentService) {}

  @Post()
  create(@Body() createChatContentDto: CreateChatContentDto) {
    return this.chatContentService.create(createChatContentDto);
  }

  @Get()
  findAll() {
    return this.chatContentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chatContentService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateChatContentDto: UpdateChatContentDto,
  ) {
    return this.chatContentService.update(+id, updateChatContentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chatContentService.remove(+id);
  }
}
