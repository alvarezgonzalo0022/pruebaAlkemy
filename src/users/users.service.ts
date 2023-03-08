import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersDTO } from './dto/users.dto';
import { User } from './entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Dog } from 'src/dogs/entity/dog.entity';
import { UpdateUserDTO } from './dto/update-user.dto';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        @InjectRepository(Dog)
        private readonly dogRepository: Repository<Dog>,
    ) {}

    async getAll(): Promise<User[]> {
        return await this.userRepository.find();
    }

    async findOne(id: string): Promise<User> {
        return await this.userRepository.findOneBy({id});
    }

    async create(createUserDTO: UsersDTO): Promise<User> {
        try {
            
            const { dogs = [], ...userDetails } = createUserDTO;

            const user = this.userRepository.create({
                ...userDetails,
                dogs: dogs.map((dog) => this.dogRepository.create({name: dog.name, age: dog.age, weight: dog.weight, legs: dog.legs}))
            });

            await this.userRepository.save(user);
            return user;

        } catch (error) {
            console.log(error);
            
        }
    }

    async update(updateUserDTO: UpdateUserDTO, id: string): Promise<User> {

        const user = this.findOne(id);

        if (!user) throw new BadRequestException('User not found');

        const newUser = {
            id,
            ...user,
            ...updateUserDTO
        }

        return this.userRepository.save(newUser);

    }

    async deleteOne(id: string): Promise<void> {
        await this.userRepository.delete(id);
    }
}
