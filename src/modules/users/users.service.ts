import { User } from './dto/initial/users.model';
import { Inject, Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/inputs/create-user.input';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_REPOSITORY') private userRepository: typeof User,
  ) {}

  public getUser(id: any): Promise<User> {
    const user: Promise<User> = this.userRepository.findOne({
      where: { id },
    });
    return user;
  }

  public getAllUsers(): Promise<User[]> {
    const users: Promise<User[]> = this.userRepository.findAll();
    return users;
  }

  public async createUser(item: CreateUserInput): Promise<User> {
    const user: Promise<User> = this.userRepository.create(item);
    return user;
  }
}
