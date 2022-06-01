import { ChatContent } from 'src/module/chat-content/entities/chat-content.entity';
import User from 'src/module/user/entities/user.entity';
import {
  CreateDateColumn,
  JoinColumn,
  ManyToOne,
  UpdateDateColumn,
} from 'typeorm';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('chat_record')
export class ChatRecord {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.chatSender)
  @JoinColumn({ name: 'senderQQ' })
  senderQQ: number;

  @ManyToOne(() => User, (user) => user.chatReceiver)
  @JoinColumn({ name: 'receiverQQ' })
  receiverQQ: number;

  @OneToMany(() => ChatContent, (chat_content) => chat_content.contentId)
  chatContent: ChatContent[];

  @UpdateDateColumn()
  updatedDate: Date;

  @CreateDateColumn()
  createdDate: Date;
}
