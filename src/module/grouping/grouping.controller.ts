import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GroupingService } from './grouping.service';
import { CreateGroupingDto } from './dto/create-grouping.dto';
import { UpdateGroupingDto } from './dto/update-grouping.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
@ApiTags('分组信息')
@Controller('grouping')
export class GroupingController {
  constructor(private readonly groupingService: GroupingService) {}

  @ApiOperation({ summary: '获取所有的分组信息' })
  @Get()
  findAll() {
    return this.groupingService.findAll();
  }
  @ApiOperation({ summary: '查询id获取分组信息' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.groupingService.getGroupingById(id);
  }
}
