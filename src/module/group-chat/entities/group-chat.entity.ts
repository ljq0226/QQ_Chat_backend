import User from 'src/module/user/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToMany,
} from 'typeorm';

@Entity('group_chat')
export class GroupChat {
  @PrimaryGeneratedColumn()
  groupId: number;
  @Column()
  groupName: string;

  @ManyToMany(() => User, (user) => user.groupChats)
  users: User[];

  @CreateDateColumn()
  createDate: Date;
}
