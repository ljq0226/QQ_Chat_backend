import { Injectable } from '@nestjs/common';
import { CreateGroupChatDto } from './dto/create-group-chat.dto';
import { UpdateGroupChatDto } from './dto/update-group-chat.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { GroupChat } from './entities/group-chat.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GroupChatService {
  constructor(
    @InjectRepository(GroupChat)
    private readonly groupChatRepository: Repository<GroupChat>,
  ) {}

  create(createGroupChatDto) {
    return 'This action adds a new groupChat';
  }
}
