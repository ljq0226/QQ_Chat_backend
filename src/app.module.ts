import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import envConfig from '../config/env';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './module/user/user.module';
import { AuthModule } from './auth/auth.module';
import { FriendsModule } from './module/friends/friends.module';
import { GroupingModule } from './module/grouping/grouping.module';
import { GroupChatModule } from './module/group-chat/group-chat.module';
import { LoginInfoModule } from './module/login-info/login-info.module';
import { ChatRecordModule } from './module/chat-record/chat-record.module';
import { ChatContentModule } from './module/chat-content/chat-content.module';

@Module({
  imports: [
    UserModule,
    ConfigModule.forRoot({
      isGlobal: true, // 设置为全局
      envFilePath: [envConfig.path],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'mysql', // 数据库类型
        // entities: ['dist/**/*.entity{.ts,.js}'], // 数据表实体
        host: configService.get('DB_HOST', 'localhost'), // 主机，默认为localhost
        port: configService.get<number>('DB_PORT', 3306), // 端口号
        username: configService.get('DB_USER', 'root'), // 用户名
        password: configService.get('DB_PASSWORD', 'adminljq'), // 密码
        database: configService.get('DB_DATABASE', 'QQChat'), //数据库名
        timezone: '+08:00', //服务器上配置的时区
        synchronize: true, //根据实体自动创建数据库表， 生产环境建议关闭
        autoLoadEntities: true, //自动导入entities
      }),
    }),
    AuthModule,
    FriendsModule,
    GroupingModule,
    GroupChatModule,
    LoginInfoModule,
    ChatRecordModule,
    ChatContentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
