import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ChatContentService } from '../chat-content/chat-content.service';
import { ChatRecord } from './entities/chat-record.entity';
import uuid from '../../util/uuid';
import { UserService } from '../user/user.service';
import { ChatContent } from '../chat-content/entities/chat-content.entity';
@Injectable()
export class ChatRecordService {
  constructor(
    @InjectRepository(ChatRecord)
    private readonly chatRecordRepository: Repository<ChatRecord>,
    private readonly chatContentService: ChatContentService,
    private readonly userService: UserService,
  ) {}

  async sendContent(data) {
    // const newContent = await this.chatContentService.create(data.content);
    // console.log(newContent);
    // return newContent;
    const senderQQ: any = await this.userService.findOne(data.senderQQ);
    const receiverQQ: any = await this.userService.findOne(data.receiverQQ);
    const newMesseage = { contentId: 0, content: data.chatContent };
    const newChatContent = await this.chatContentService.create(newMesseage);
    console.log(newChatContent);
    //判断此前有没有聊天记录表
    const recordEntity = await this.chatRecordRepository.findOne({
      relations: ['senderQQ', 'receiverQQ'],
      where: { senderQQ, receiverQQ },
    });
    //如果存在的话，就直接将新信息push进chatContent[]里
    if (recordEntity) {
      console.log(recordEntity.chatContent);
    } else {
      //否则 创建新数组 再push
      const chatContent: ChatContent[] = [];
      const newdata = {
        senderQQ,
        receiverQQ,
        chatContent: chatContent,
        // chatContent: chatContent.push(newChatContent),
      };
    }

    // const newRecord = await this.chatRecordRepository.create(newdata);
    // console.log(newRecord);
    // const a = await this.chatRecordRepository.save(newRecord);
    // console.log(a);
  }
}
