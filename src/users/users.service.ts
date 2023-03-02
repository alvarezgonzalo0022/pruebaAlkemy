import { Injectable } from '@nestjs/common';
import { UsersDTO } from './dto/users.dto';

@Injectable()
export class UsersService {

    private userArray: UsersDTO[] = [];

    getAll() {
        return this.userArray;
    }

    sayHello() {
        return `Hi, i am an user`;
    }

    create(createUserDTO: UsersDTO) {
        this.userArray.push(createUserDTO);
        return `User created with name ${createUserDTO.name}`
    }
}
