import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { ChatRecord } from '../../chat-record/entities/chat-record.entity';

@Entity('chat_content')
export class ChatContent {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => ChatRecord, (chatRecord) => chatRecord.chatContent)
  @JoinColumn({ name: 'chatRecordId' })
  chatRecord: ChatRecord;
  @RelationId((c: ChatContent) => c.chatRecord)
  chatRecordId: string;
  @Column()
  content: string;

  @CreateDateColumn()
  createDate: Date;
}
