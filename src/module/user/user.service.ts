import User from './entities/user.entity';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { Repository } from 'typeorm';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  /**
   * 账号密码注册
   * @param createUser
   */
  async register(createUser: CreateUserDto) {
    // const qqNumber = Math.floor(Math.random() * 100000000).toString();
    // createUser.qq = qqNumber;
    // const newUser = await this.userRepository.create(createUser);
    // console.log(newUser);
    // return await this.userRepository.save(newUser);
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(qq) {
    return await this.userRepository.findOne({
      relations: ['loginInfoId'],
      where: { qq },
    });
  }
  //获取好友列表
  async getFriendsList(qq) {
    return;
  }
  //获取该用户的登录信息
  async getloginInfo(qq) {
    return;
  }
  async saveUser(user) {
    return await this.userRepository.save(user);
  }
}
