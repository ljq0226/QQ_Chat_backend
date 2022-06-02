import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserService } from '../user/user.service';
import { LoginInfo } from './entities/login-info.entity';
import { checkEntity } from '../../util/check';
import User from '../user/entities/user.entity';
@Injectable()
export class LoginInfoService {
  constructor(
    @InjectRepository(LoginInfo)
    @InjectRepository(User)
    private readonly loginInfoRepository: Repository<LoginInfo>,
    private readonly userService: UserService,
  ) {}

  async login(loginInfo) {
    const { qq } = loginInfo;
    const user = await this.userService.findOne(qq);
    checkEntity(user, qq);
    const loginInfoId = user.loginInfoId;
    delete loginInfo['qq'];
    //判断是否已经存在登录信息表
    if (loginInfoId) {
      await this.loginInfoRepository.update(loginInfoId, loginInfo);
    } else {
      const logininfo = this.loginInfoRepository.create(loginInfo);
      loginInfo.selfQQ = user;
      user.loginInfo = await this.loginInfoRepository.save(logininfo)[0];
      this.userService.saveUser(user);
    }
  }
  async findAll() {
    return await this.loginInfoRepository.find({ relations: ['userSelf'] });
  }
}
