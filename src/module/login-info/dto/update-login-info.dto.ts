import { PartialType } from '@nestjs/swagger';
import { CreateLoginInfoDto } from './create-login-info.dto';

export class UpdateLoginInfoDto extends PartialType(CreateLoginInfoDto) {}
