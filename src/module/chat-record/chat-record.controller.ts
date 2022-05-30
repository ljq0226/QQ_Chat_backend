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
import { ChatRecordService } from './chat-record.service';
import { CreateChatRecordDto } from './dto/create-chat-record.dto';
import { UpdateChatRecordDto } from './dto/update-chat-record.dto';
@ApiTags('聊天记录')
@Controller('chat-record')
export class ChatRecordController {
  constructor(private readonly chatRecordService: ChatRecordService) {}

  @Post()
  create(@Body() createChatRecordDto: CreateChatRecordDto) {
    return this.chatRecordService.create(createChatRecordDto);
  }

  @Get()
  findAll() {
    return this.chatRecordService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chatRecordService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateChatRecordDto: UpdateChatRecordDto,
  ) {
    return this.chatRecordService.update(+id, updateChatRecordDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chatRecordService.remove(+id);
  }
}
