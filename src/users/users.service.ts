import { Injectable } from '@nestjs/common';
import { UsersDTO } from './dto/users.dto';
import { User } from './entity/user.entity';
import { UserRepository } from './repository/user.repository';
import { v4 as uuid } from 'uuid';
import { UpdateUserDTO } from './dto/update-user.dto';

@Injectable()
export class UsersService {

    constructor(
        private readonly userRepository: UserRepository,
    ) {}

    getAll(): User[] {
        return this.userRepository.getAll();
    }

    sayHello(): string {
        return this.userRepository.sayHello();
    }

    findOne(id: string): User {
        return this.userRepository.findOne(id);
    }

    create(createUserDTO: UsersDTO): User {
        const user: User = {
            id: uuid(),
            name: createUserDTO.name,
            email: createUserDTO.email,
            age: createUserDTO.age,
        }
        return this.userRepository.create(user);
    }

    update(updateUserDTO: UpdateUserDTO, id: string): User {
        const newUser: User = {
            id: id,
            name: updateUserDTO.name,
            email: updateUserDTO.email,
            age: updateUserDTO.age,
        }
        return this.userRepository.update(newUser);
    }

    deleteOne(id: string): string {
        return this.userRepository.deleteOne(id) ? `User with id: ${id} successfully deleted` : `User with id: ${id} not found`;
    }
}
