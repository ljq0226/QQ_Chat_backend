import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LoginInfoService } from './login-info.service';
import { CreateLoginInfoDto } from './dto/create-login-info.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
@ApiTags('登录信息')
@Controller('login')
export class LoginInfoController {
  constructor(private readonly loginInfoService: LoginInfoService) {}
  @ApiOperation({ summary: '登录' })
  @Post('')
  create(@Body() createLoginInfoDto: CreateLoginInfoDto) {
    return this.loginInfoService.login(createLoginInfoDto);
  }
  @ApiOperation({ summary: '获取所有的登录状态' })
  @Get()
  findAll() {
    return this.loginInfoService.findAll();
  }
}
