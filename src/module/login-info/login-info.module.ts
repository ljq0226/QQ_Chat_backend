import { Module } from '@nestjs/common';
import { LoginInfoService } from './login-info.service';
import { LoginInfoController } from './login-info.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoginInfo } from './entities/login-info.entity';
import User from '../user/entities/user.entity';
import { UserModule } from '../user/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([LoginInfo]), UserModule],
  controllers: [LoginInfoController],
  providers: [LoginInfoService],
  exports: [LoginInfoService],
})
export class LoginInfoModule {}
