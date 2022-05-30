import { Module } from '@nestjs/common';
import { ChatRecordService } from './chat-record.service';
import { ChatRecordController } from './chat-record.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatRecord } from './entities/chat-record.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ChatRecord])],
  controllers: [ChatRecordController],
  providers: [ChatRecordService],
})
export class ChatRecordModule {}
