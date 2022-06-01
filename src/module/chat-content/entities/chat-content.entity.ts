import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ChatRecord } from '../../chat-record/entities/chat-record.entity';

@Entity('chat_content')
export class ChatContent {
  @PrimaryGeneratedColumn()
  @ManyToOne(() => ChatRecord, (chatRecord) => chatRecord.chatContent)
  @JoinColumn({ name: 'contentId' })
  contentId: number;

  @Column({ name: 'content' })
  content: string;

  @CreateDateColumn()
  createDate: Date;
}
