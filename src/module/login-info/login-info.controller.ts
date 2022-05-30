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
@Controller('login-info')
export class LoginInfoController {
  constructor(private readonly loginInfoService: LoginInfoService) {}
  @ApiOperation({ summary: '创建新的信息' })
  @Post('loginInfo')
  create(@Body() createLoginInfoDto: CreateLoginInfoDto) {
    return this.loginInfoService.create(createLoginInfoDto);
  }
  @ApiOperation({ summary: '获取所有的登录状态' })
  @Get()
  findAll() {
    return this.loginInfoService.findAll();
  }
}
