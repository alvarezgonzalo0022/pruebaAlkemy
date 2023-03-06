import { Injectable } from '@nestjs/common';
import { UsersDTO } from './dto/users.dto';

@Injectable()
export class UsersService {

    private userArray: UsersDTO[] = [];

    getAll(): UsersDTO[] {
        return this.userArray;
    }

    sayHello(): string {
        return `Hi, i am an user`;
    }

    findOne(name: string): UsersDTO {
        return this.userArray.find(user => user.name === name);
    }

    create(createUserDTO: UsersDTO): string {
        this.userArray.push(createUserDTO);
        return `User created with name ${createUserDTO.name}`
    }
}
