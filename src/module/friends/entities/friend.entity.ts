//    posts/posts.entity.ts
import { Grouping } from 'src/module/grouping/entities/grouping.entity';
import User from 'src/module/user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
@Entity('friend')
export default class Friend {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.friendShip_self)
  @JoinColumn({ name: 'selfQQ' })
  self: User;
  @RelationId((f: Friend) => f.self)
  selfQQ: string;

  @ManyToOne(() => User, (user) => user.friendShip_friend)
  @JoinColumn({ name: 'friendQQ' })
  friend: User;
  @RelationId((f: Friend) => f.self)
  friendQQ: string;

  @ManyToOne(() => Grouping)
  @JoinColumn({ name: 'groupingId' })
  grouping: Grouping;
  @RelationId((f: Friend) => f.grouping)
  groupingId: number;

  @Column({ default: false })
  isAlive: boolean;

  @CreateDateColumn()
  createdDate: Date;
}
