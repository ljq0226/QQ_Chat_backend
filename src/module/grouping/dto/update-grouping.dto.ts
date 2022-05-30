import { PartialType } from '@nestjs/swagger';
import { CreateGroupingDto } from './create-grouping.dto';

export class UpdateGroupingDto extends PartialType(CreateGroupingDto) {}
