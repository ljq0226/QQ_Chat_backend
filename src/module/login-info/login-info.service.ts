import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLoginInfoDto } from './dto/create-login-info.dto';
import { LoginInfo } from './entities/login-info.entity';

@Injectable()
export class LoginInfoService {
  constructor(
    @InjectRepository(LoginInfo)
    private readonly loginInfoRepository: Repository<LoginInfo>,
  ) {}

  async create(newLoginInfo: CreateLoginInfoDto) {
    // const newInfo = await this.loginInfoRepository.create(newLoginInfo);
    // return this.loginInfoRepository.save(newLoginInfo);
  }

  async findAll() {
    return await this.loginInfoRepository.find();
  }
}
