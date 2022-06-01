import { Module } from '@nestjs/common';
import { ChatContentService } from './chat-content.service';
import { ChatContentController } from './chat-content.controller';

import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatContent } from './entities/chat-content.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ChatContent])],
  controllers: [ChatContentController],
  providers: [ChatContentService],
  exports: [ChatContentService],
})
export class ChatContentModule {}
