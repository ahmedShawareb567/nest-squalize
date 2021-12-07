import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { User } from './dto/initial/users.model';
import { UsersService } from './users.service';
import { CreateUserInput } from './dto/inputs/create-user.input';

@Resolver((of) => User)
export class UsersResolver {
  constructor(private userServices: UsersService) {}

  @Query(() => User)
  user(@Args('id') id: String) {
    return this.userServices.getUser(id);
  }

  @Query(() => [User])
  users() {
    return this.userServices.getAllUsers();
  }

  @Mutation(() => User)
  createUser(@Args('input') input: CreateUserInput): Promise<User> {
    return this.userServices.createUser(input);
  }
}
