import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ChatRecord } from '../../chat-record/entities/chat-record.entity';

@Entity('chat_content')
export class ChatContent {
  @PrimaryGeneratedColumn({ name: 'chatContent_id' })
  id: number;

  @Column({ name: 'chatContent_content' })
  content: string;

  @ManyToOne(() => ChatRecord, (chatRecord) => chatRecord.chatContent)
  @JoinColumn({ name: 'chatRecordId' })
  chatRecord: ChatRecord;
}
