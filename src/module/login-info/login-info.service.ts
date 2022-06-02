import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserService } from '../user/user.service';
import { LoginInfo } from './entities/login-info.entity';
import { checkEntity } from '../../util/check';
@Injectable()
export class LoginInfoService {
  constructor(
    @InjectRepository(LoginInfo)
    private readonly loginInfoRepository: Repository<LoginInfo>,
    private readonly userService: UserService,
  ) {}

  async login(newLoginInfo) {
    // const { qq } = newLoginInfo;
    // const qqUserInfo = await this.userService.findOne(qq);
    // checkEntity(qqUserInfo, '用户');
    // const { loginInfoId } = qqUserInfo;
    // let entity;
    // //判断是否已经存在登录信息表
    // if (loginInfoId) {
    //   entity = await this.loginInfoRepository.update(loginInfoId.id, {
    //     isAlive: newLoginInfo.isAlive,
    //     ipAddress: newLoginInfo.ipAddress,
    //     portNumber: newLoginInfo.portNumber,
    //   });
    // } else {
    //   entity = await this.loginInfoRepository.save(newLoginInfo);
    // }
    // qqUserInfo.loginInfoId = entity.id;
    // return this.userService.saveUser(qqUserInfo);
  }

  async findAll() {
    return await this.loginInfoRepository.find();
  }
}
