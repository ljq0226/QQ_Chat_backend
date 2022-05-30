//    posts/posts.entity.ts
import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
@Entity('friend')
export default class Friend {
  @PrimaryColumn()
  friendQQ: number;

  @PrimaryColumn()
  selfQQ: number;

  @Column({ default: 1 })
  groupingId: number;

  @Column({ default: false })
  isAlive: boolean;

  @CreateDateColumn()
  createdDate: Date;
}
