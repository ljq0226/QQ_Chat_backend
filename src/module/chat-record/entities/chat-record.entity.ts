import { ChatContent } from 'src/module/chat-content/entities/chat-content.entity';
import { CreateDateColumn } from 'typeorm';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('chat_record')
export class ChatRecord {
  @PrimaryGeneratedColumn()
  chatRecord_id: number;
  @Column({ name: 'chatRecord_senderQQ' })
  senderQQ: number;
  @Column({ name: 'chatRecord_receiverQQ' })
  receiverQQ: number;
  @OneToMany(() => ChatContent, (chat_content) => chat_content.chatRecord)
  chatContent: ChatContent[];

  @CreateDateColumn()
  createdDate: Date;
}
