import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { ChatRecord } from '../../chat-record/entities/chat-record.entity';

@Entity('chat_content')
export class ChatContent {
  @PrimaryColumn()
  @ManyToOne(() => ChatRecord, (chatRecord) => chatRecord.chatContent)
  @JoinColumn({ name: 'contentId' })
  contentId: number;

  @Column({ name: 'content' })
  content: string;
}
