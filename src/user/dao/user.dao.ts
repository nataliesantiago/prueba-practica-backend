import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';

export class UserDao {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>) {}

  async getAllUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  async getUserById(userId: number): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { id: userId } });
  }

  async getUserByUserName(userName: string): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { username: userName } });
  }

  async createUser(user: User): Promise<User> {
    return this.userRepository.save(user);
  }

  async updateUser(userId: number, updatedUserData: Partial<User>): Promise<User | undefined> {
    await this.userRepository.update(userId, updatedUserData);
    return this.userRepository.findOne({ where: { id: userId } });
  }

  async deleteUser(userId: number): Promise<void> {
    await this.userRepository.delete(userId);
  }

  async authenticate(user: {username: string, password: string}): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { username: user.username, password: user.password } });
  }
}