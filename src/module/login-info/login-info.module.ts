import { Module } from '@nestjs/common';
import { LoginInfoService } from './login-info.service';
import { LoginInfoController } from './login-info.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoginInfo } from './entities/login-info.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LoginInfo])],
  controllers: [LoginInfoController],
  providers: [LoginInfoService],
  exports: [LoginInfoService],
})
export class LoginInfoModule {}
