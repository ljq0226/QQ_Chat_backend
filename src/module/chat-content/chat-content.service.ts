import { Injectable } from '@nestjs/common';
import { CreateChatContentDto } from './dto/create-chat-content.dto';
import { UpdateChatContentDto } from './dto/update-chat-content.dto';

@Injectable()
export class ChatContentService {
  create(createChatContentDto: CreateChatContentDto) {
    return 'This action adds a new chatContent';
  }
}
