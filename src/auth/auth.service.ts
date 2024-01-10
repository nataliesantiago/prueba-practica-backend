import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '../user/user';
import jwtConstants from 'src/security/constants';


@Injectable()
export class AuthService {
  constructor(private usersService: UserService, private jwtService: JwtService) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user: User = await this.usersService.getUserByUserName(username);
    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(req: any) {
    const payload = { username: req.user.username, password: req.user.password };
    const userLogger = await this.usersService.authenticate(payload);
    return {
      token: this.jwtService.sign(payload, { privateKey: jwtConstants.JWT_SECRET }),
    };
  }
}
