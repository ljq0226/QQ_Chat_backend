import { Injectable } from '@nestjs/common';
import { CreateChatContentDto } from './dto/create-chat-content.dto';
import { UpdateChatContentDto } from './dto/update-chat-content.dto';

@Injectable()
export class ChatContentService {
  create(createChatContentDto: CreateChatContentDto) {
    return 'This action adds a new chatContent';
  }

  findAll() {
    return `This action returns all chatContent`;
  }

  findOne(id: number) {
    return `This action returns a #${id} chatContent`;
  }

  update(id: number, updateChatContentDto: UpdateChatContentDto) {
    return `This action updates a #${id} chatContent`;
  }

  remove(id: number) {
    return `This action removes a #${id} chatContent`;
  }
}
