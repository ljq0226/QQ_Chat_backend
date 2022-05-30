//    posts/posts.entity.ts
import { Exclude } from 'class-transformer';
import {
  BeforeInsert,
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { Grouping } from '../../grouping/entities/grouping.entity';
import { UserGender } from '../enum';
import { LoginInfo } from 'src/module/login-info/entities/login-info.entity';
import { GroupChat } from 'src/module/group-chat/entities/group-chat.entity';

@Entity('user')
export default class User {
  @PrimaryColumn()
  qq: number;
  @Column({ length: 20 })
  username: string;

  @OneToMany(() => Grouping, (grouping) => grouping.user)
  grouping: Grouping[];

  @ManyToMany(() => GroupChat, (groupChat) => groupChat.users)
  @JoinTable({
    name: 'user-groupChat',
    joinColumn: { name: 'userQQ', referencedColumnName: 'qq' },
    inverseJoinColumn: { name: 'groupChat', referencedColumnName: 'groupId' },
  })
  groupChats: GroupChat[];

  @OneToOne(() => LoginInfo)
  @JoinColumn({ name: 'loginInfoId' })
  loginInfoId: LoginInfo;

  //对返回数据实现过滤password字段
  @Exclude()
  @Column({ select: false })
  password: string;

  @Column({ default: '' })
  avatar: string;

  @Column({
    type: 'enum',
    enum: UserGender,
    default: UserGender.MALE,
  })
  gender: string;

  @Column({ type: 'int', default: 0 })
  age: number;

  @Column({ default: '@qq.com' })
  email: string;

  @Column({ default: 'DoYourJob' })
  signature: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  create_time: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  update_time: Date;
  //对密码进行加密处理
  @BeforeInsert()
  async encryptPwd() {
    if (!this.password) return;
    this.password = await bcrypt.hashSync(this.password, 10);
  }
}