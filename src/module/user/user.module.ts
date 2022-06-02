import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import User from './entities/user.entity';
import Friend from '../friends/entities/friend.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Friend])],
  controllers: [UserController],
  providers: [UserService, User],
  exports: [UserService],
})
export class UserModule {}
