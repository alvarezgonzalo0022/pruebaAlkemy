import { Module } from '@nestjs/common';
import { UserRepository } from './repository/user.repository';
import { UserController } from './users.controller';
import { UsersService } from './users.service';

@Module({
    controllers: [UserController],
    providers: [UsersService, UserRepository]
})
export class UsersModule {}
