import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Friend from './entities/friend.entity';
import { Brackets, Repository } from 'typeorm';
import { UserService } from '../user/user.service';
@Injectable()
export class FriendsService {
  constructor(
    @InjectRepository(Friend)
    private readonly friendRepository: Repository<Friend>,
    private readonly userService: UserService,
  ) {}

  async getInfoById(id) {
    return await this.friendRepository.find({
      relations: ['selfQQ'],
      where: { id: id },
    });
  }

  async test() {
    const newFriend = {
      selfQQ: 5,
      friendQQ: 4,
    };

    const data = await this.friendRepository.find({
      relations: ['selfQQ'],
      where: { selfQQ: 5, friendQQ: 4 },
    });
    console.log(data);
    console.log(11111);
  }

  //添加好友
  async addFriend(friendInfo) {
    const { selfQQ, friendQQ, grouping } = friendInfo;
    //检验是否输入的用户存在
    const selfUser = await this.userService.findOne(selfQQ);
    const friendUser = await this.userService.findOne(friendQQ);
    if (!selfUser || !friendUser) {
      throw new HttpException('用户不存在', HttpStatus.BAD_REQUEST);
    }
    //检验是否已经存在好友关系
    const friendData = await this.friendRepository.find({
      relations: ['selfQQ'],
      where: [{ friendQQ: friendQQ || selfQQ }],
    });
    //因为在进行条件查询时 查询不到selfQQ 而加入relation 后selfQQ类型又改变
    //所以出此下策
    const real = [selfQQ, friendQQ];
    const arr = [];
    for (const item of friendData) {
      const selfqq: any = item.selfQQ;
      const friendqq = item.friendQQ;
      //将符合条件的qq号放入arr中
      arr.push([selfqq, friendqq]);
    }
    let flag = false;
    for (const item of arr) {
      //比较传入的qq号信息 和 符合条件的arr 进行判断
      if (item == real || item.reverse() == real) flag = true;
    }
    if (flag) {
      throw new HttpException(
        '好友已存在，请勿重复添加',
        HttpStatus.BAD_REQUEST,
      );
    }
    const newFriendship1 = await this.friendRepository.create(friendInfo);
    const newFriendship2 = { selfQQ: friendQQ, friendQQ: selfQQ, grouping };
    await this.friendRepository.save(newFriendship1);
    await this.friendRepository.save(newFriendship2);
    return '添加成功';
  }
}
