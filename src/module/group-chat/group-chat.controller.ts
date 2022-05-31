import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GroupChatService } from './group-chat.service';
import { CreateGroupChatDto } from './dto/create-group-chat.dto';
import { UpdateGroupChatDto } from './dto/update-group-chat.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('群聊')
@Controller('group-chat')
export class GroupChatController {
  constructor(private readonly groupChatService: GroupChatService) {}

  @Post()
  create(@Body() createGroupChatDto: CreateGroupChatDto) {
    return this.groupChatService.create(createGroupChatDto);
  }
}
