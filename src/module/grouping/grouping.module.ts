import { Module } from '@nestjs/common';
import { GroupingService } from './grouping.service';
import { GroupingController } from './grouping.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Grouping } from './entities/grouping.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Grouping])],
  controllers: [GroupingController],
  providers: [GroupingService],
})
export class GroupingModule {}
