import { ChatContent } from 'src/module/chat-content/entities/chat-content.entity';
import User from 'src/module/user/entities/user.entity';
import {
  CreateDateColumn,
  JoinColumn,
  ManyToOne,
  RelationId,
  UpdateDateColumn,
} from 'typeorm';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('chat_record')
export class ChatRecord {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.chatSender)
  sender: User;
  @RelationId((c: ChatRecord) => c.sender)
  senderQQ: string;

  @ManyToOne(() => User, (user) => user.chatReceiver)
  receiver: User;
  @RelationId((c: ChatRecord) => c.sender)
  receiverQQ: string;

  @OneToMany(() => ChatContent, (chat_content) => chat_content.chatRecord)
  chatContent: ChatContent[];

  @UpdateDateColumn()
  updatedDate: Date;

  @CreateDateColumn()
  createdDate: Date;
}
