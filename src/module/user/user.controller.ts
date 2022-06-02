import {
  Controller,
  Get,
  Post,
  Body,
  UseInterceptors,
  ClassSerializerInterceptor,
  UseGuards,
  Req,
  Param,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
@ApiTags('用户')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: '注册用户' })
  @ApiResponse({ status: 201, type: CreateUserDto })
  @UseInterceptors(ClassSerializerInterceptor) //请求返回的数据中，就不会包含password这个字段。
  @Post('register')
  register(@Body() createUser: CreateUserDto) {
    return this.userService.register(createUser);
  }

  @ApiOperation({ summary: '获取登录用户信息' })
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Get()
  async getUserInfo(@Req() req) {
    return req.user;
  }

  // @ApiBearerAuth()
  // @ApiOperation({ summary: '获取所有用户列表' })
  // @Get('getUsers')
  // findAll() {
  //   return this.userService.findAll();
  // }

  //通过传入qq号 获取好友列表
  @ApiOperation({ summary: '获取好友信息' })
  @Get('friends/:qq')
  getFriends(@Param('qq') qq: string) {
    return this.userService.getFriendsList(qq);
  }
  // @ApiOperation({ summary: '测试一对一' })
  // @Get('test/:qq')
  // getLoginStatus(@Param('qq') qq: number) {
  //   return this.userService.getloginInfo(qq);
  // }
}
