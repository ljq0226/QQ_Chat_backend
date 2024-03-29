//    posts/posts.entity.ts
import { Exclude } from 'class-transformer';
import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  RelationId,
  UpdateDateColumn,
} from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { Grouping } from '../../grouping/entities/grouping.entity';
import { UserGender } from '../enum';
import { LoginInfo } from 'src/module/login-info/entities/login-info.entity';
import { GroupChat } from 'src/module/group-chat/entities/group-chat.entity';
import Friend from 'src/module/friends/entities/friend.entity';
import { ChatRecord } from 'src/module/chat-record/entities/chat-record.entity';

@Entity('user')
export default class User {
  @PrimaryColumn()
  qq: string;
  @Column({ length: 20 })
  username: string;

  //好友关系
  @OneToMany(() => Friend, (friend) => friend.self)
  friendShip_self: Friend[];
  @OneToMany(() => Friend, (friend) => friend.friend)
  friendShip_friend: Friend[];
  //分组
  @OneToMany(() => Grouping, (grouping) => grouping.user)
  grouping: Grouping[];

  //作为消息发送者和接受者
  @OneToMany(() => ChatRecord, (chatRecord) => chatRecord.sender)
  chatSender: ChatRecord[];
  @OneToMany(() => ChatRecord, (chatRecord) => chatRecord.receiver)
  chatReceiver: ChatRecord[];

  //群关系
  @ManyToMany(() => GroupChat, (groupChat) => groupChat.users)
  @JoinTable({
    name: 'user-groupChat',
    joinColumn: { name: 'userQQ', referencedColumnName: 'qq' },
    inverseJoinColumn: { name: 'groupChatId', referencedColumnName: 'groupId' },
  })
  groupChats: GroupChat[];

  //登录信息
  @OneToOne(() => LoginInfo)
  @JoinColumn({ name: 'loginInfoId' })
  loginInfo: LoginInfo;
  @RelationId((u: User) => u.loginInfo)
  loginInfoId: number;

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

  @CreateDateColumn()
  createDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;

  //对密码进行加密处理
  @BeforeInsert()
  async encryptPwd() {
    if (!this.password) return;
    this.password = await bcrypt.hashSync(this.password, 10);
  }
}
