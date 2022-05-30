import { PartialType } from '@nestjs/swagger';
import { CreateChatRecordDto } from './create-chat-record.dto';

export class UpdateChatRecordDto extends PartialType(CreateChatRecordDto) {}
