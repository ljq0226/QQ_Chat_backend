import { Module } from '@nestjs/common';
import { ChatRecordService } from './chat-record.service';
import { ChatRecordController } from './chat-record.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatRecord } from './entities/chat-record.entity';
import { ChatContentModule } from '../chat-content/chat-content.module';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([ChatRecord]),
    ChatContentModule,
    UserModule,
  ],
  controllers: [ChatRecordController],
  providers: [ChatRecordService],
  exports: [ChatRecordService],
})
export class ChatRecordModule {}
