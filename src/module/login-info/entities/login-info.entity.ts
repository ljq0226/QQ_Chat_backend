import User from 'src/module/user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('login_info')
export class LoginInfo {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ default: '127.0.0.1' })
  ipAddress: string;

  @Column({ default: 8000 })
  portNumber: number;

  @Column({ default: false })
  isAlive: boolean;

  @OneToOne(() => User, (user) => user.loginInfo)
  userSelf: User;
  @CreateDateColumn()
  createDate: Date;
}
