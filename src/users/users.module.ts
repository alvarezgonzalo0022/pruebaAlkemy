import { Module } from '@nestjs/common';
import { UserController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { Dog } from 'src/dogs/entity/dog.entity';

@Module({
    controllers: [UserController],
    providers: [UsersService],
    imports: [
        TypeOrmModule.forFeature([User, Dog])
    ]
})
export class UsersModule {}
