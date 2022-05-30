import { Injectable } from '@nestjs/common';
import { CreateGroupingDto } from './dto/create-grouping.dto';
import { UpdateGroupingDto } from './dto/update-grouping.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Grouping } from './entities/grouping.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GroupingService {
  constructor(
    @InjectRepository(Grouping)
    private readonly groupingRepository: Repository<Grouping>,
  ) {}

  async findAll() {
    return await this.groupingRepository.find();
  }

  async getGroupingById(id) {
    console.log(id);
    return await this.groupingRepository
      .createQueryBuilder('group')
      .where('group.grouping_id = :id', { id })
      .getOne();
  }
}
