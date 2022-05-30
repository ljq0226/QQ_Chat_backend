import { Injectable } from '@nestjs/common';
import { CreateChatRecordDto } from './dto/create-chat-record.dto';
import { UpdateChatRecordDto } from './dto/update-chat-record.dto';

@Injectable()
export class ChatRecordService {
  create(createChatRecordDto: CreateChatRecordDto) {
    return 'This action adds a new chatRecord';
  }

  findAll() {
    return `This action returns all chatRecord`;
  }

  findOne(id: number) {
    return `This action returns a #${id} chatRecord`;
  }

  update(id: number, updateChatRecordDto: UpdateChatRecordDto) {
    return `This action updates a #${id} chatRecord`;
  }

  remove(id: number) {
    return `This action removes a #${id} chatRecord`;
  }
}
