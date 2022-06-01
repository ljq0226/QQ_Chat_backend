import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ChatContent } from './entities/chat-content.entity';

@Injectable()
export class ChatContentService {
  constructor(
    @InjectRepository(ChatContent)
    private chatContentRepository: Repository<ChatContent>,
  ) {}

  async create(content) {
    const newContent = await this.chatContentRepository.create(content);
    return await this.chatContentRepository.save(newContent);
  }
}
