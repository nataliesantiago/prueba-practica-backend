import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import {PassportModule} from "@nestjs/passport";
import {JwtModule, JwtService} from "@nestjs/jwt";
import {UserService} from "../user/user.service";
import {LocalStrategy} from "./strategies/local.strategy";
import {JwtStrategy} from "./strategies/jwt.strategy";
import jwtConstants from '../security/constants';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.JWT_SECRET,
      signOptions: { expiresIn: jwtConstants.JWT_EXPIRES_IN },
    })
  ],
  providers: [AuthService, JwtService, LocalStrategy, JwtStrategy],
  exports: [AuthService],

})
export class AuthModule {}
