//    posts/posts.entity.ts
import User from 'src/module/user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity('friend')
export default class Friend {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  friendQQ: number;

  @ManyToOne(() => User, (user) => user.selfQQ)
  @JoinColumn({ name: 'selfQQ' })
  selfQQ: number;

  @Column({ default: 1 })
  groupingId: number;

  @Column({ default: false })
  isAlive: boolean;

  @CreateDateColumn()
  createdDate: Date;
}
