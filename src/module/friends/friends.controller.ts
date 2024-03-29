import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FriendsService } from './friends.service';
import { CreateFriendDto } from './dto/create-friend.dto';
import { UpdateFriendDto } from './dto/update-friend.dto';
import { ApiOperation, ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { get } from 'http';
@ApiTags('QQ好友')
@Controller('friends')
export class FriendsController {
  constructor(private readonly friendsService: FriendsService) {}

  @ApiOperation({ summary: '通过friend_id获取好友QQ' })
  @Get('/friend/id')
  getInfoById(@Param('id') id: number) {
    return this.friendsService.getInfoById(id);
  }
  @ApiOperation({ summary: '添加好友关系' })
  @Post('/friend')
  getAllInfo(@Body() body: CreateFriendDto) {
    return this.friendsService.addFriend(body);
  }
}
