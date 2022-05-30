import User from 'src/module/user/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity('grouping')
export class Grouping {
  @PrimaryGeneratedColumn()
  grouping_id: number;

  @Column()
  grouping_name: string;

  @ManyToOne(() => User, (user) => user.grouping)
  user: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  create_time: Date;
}
