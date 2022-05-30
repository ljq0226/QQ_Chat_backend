import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Friend from './entities/friend.entity';
import { Repository } from 'typeorm';
@Injectable()
export class FriendsService {
  constructor(
    @InjectRepository(Friend)
    private readonly friendRepository: Repository<Friend>,
  ) {}

  async getInfoById(id) {
    return;
    return await this.friendRepository.find(id);
  }
  async getAllFriendInfo() {
    return;
    return await this.friendRepository
      .createQueryBuilder('friend')
      .leftJoinAndSelect('friend.self', 'self')
      .where('friend.selfQQ = :selfQQ', { selfQQ: 31088139 })
      .getMany();
  }
}
