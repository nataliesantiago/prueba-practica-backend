import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { AuthService } from '../auth/auth.service';
import { JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserDao } from './dao/user.dao';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
  ],
  providers: [UserService, UserDao, AuthService, JwtService],
  exports: [UserService],
  controllers: [UserController],
})
export class UserModule {}
