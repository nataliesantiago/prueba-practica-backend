import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserDao } from './dao/user.dao';

@Injectable()
export class UserService {
  constructor(
    private readonly userDao: UserDao,
  ) {}

  async getAllUsers(): Promise<User[]> {
    return this.userDao.getAllUsers();
  }

  async getUserById(userId: number): Promise<User | undefined> {
    return this.userDao.getUserById(userId);
  }

  async getUserByUserName(userName: string): Promise<User | undefined> {
    return this.userDao.getUserByUserName(userName);
  }


  async createUser(user: User): Promise<User> {
    return this.userDao.createUser(user);
  }

  async updateUser(userId: number, updatedUserData: Partial<User>): Promise<User | undefined> {
    return this.userDao.updateUser(userId, updatedUserData);
  }

  async deleteUser(userId: number): Promise<void> {
    await this.userDao.deleteUser(userId);
  }

  async authenticate(user: {username: string, password: string}): Promise<any> {
    await this.userDao.authenticate(user);
  }
}