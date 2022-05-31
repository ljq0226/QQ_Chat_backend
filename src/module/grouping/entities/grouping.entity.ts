import User from 'src/module/user/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity('grouping')
export class Grouping {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => User, (user) => user.grouping)
  @JoinColumn({ name: 'userQQ' })
  userQQ: number;

  @CreateDateColumn()
  createDate: Date;
}
