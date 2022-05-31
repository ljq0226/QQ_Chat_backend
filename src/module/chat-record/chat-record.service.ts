import { Injectable } from '@nestjs/common';
import { CreateChatRecordDto } from './dto/create-chat-record.dto';
import { UpdateChatRecordDto } from './dto/update-chat-record.dto';

@Injectable()
export class ChatRecordService {
  create(createChatRecordDto: CreateChatRecordDto) {
    return 'This action adds a new chatRecord';
  }
}
