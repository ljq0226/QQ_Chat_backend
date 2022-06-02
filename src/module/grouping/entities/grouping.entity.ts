import User from 'src/module/user/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  RelationId,
} from 'typeorm';

@Entity('grouping')
export class Grouping {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => User, (user) => user.grouping)
  @JoinColumn({ name: 'userQQ' })
  user: User;
  @RelationId((g: Grouping) => g.user)
  userQQ: string;

  @CreateDateColumn()
  createDate: Date;
}
