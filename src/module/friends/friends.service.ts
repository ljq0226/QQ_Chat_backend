import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Friend from './entities/friend.entity';
import { Repository } from 'typeorm';
import { UserService } from '../user/user.service';
@Injectable()
export class FriendsService {
  constructor(
    @InjectRepository(Friend)
    private readonly friendRepository: Repository<Friend>,
    private readonly userService: UserService,
  ) {}

  //通过好友关系id获取好友信息
  async getInfoById(id) {
    return;
  }

  //添加好友
  async addFriend(friendInfo) {
    return;
  }
}
