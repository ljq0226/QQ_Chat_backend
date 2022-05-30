import { ChatContent } from 'src/module/chat-content/entities/chat-content.entity';
import User from 'src/module/user/entities/user.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('loginInfo')
export class LoginInfo {
  @PrimaryGeneratedColumn({ name: 'loginInfo_id' })
  id: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  create_at: Date;

  @Column({ default: '127.0.0.1' })
  ipAddress: string;

  @Column({ default: 8000 })
  portNumber: number;

  @Column({ default: false })
  isAlive: boolean;

  @OneToOne(() => User, (user) => user.loginInfoId)
  userSelf: User;
}
