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
@ApiTags('QQ好友')
@Controller('friends')
export class FriendsController {
  constructor(private readonly friendsService: FriendsService) {}

  @ApiOperation({ summary: '通过friend_id获取好友QQ' })
  @Get('/friend/id')
  getInfoById(@Param('id') id: number) {
    return this.friendsService.getInfoById(id);
  }
  @ApiOperation({ summary: '通过friend_id获取好友QQ' })
  @Get('/friend')
  getAllInfo() {
    return this.friendsService.getAllFriendInfo();
  }
}
