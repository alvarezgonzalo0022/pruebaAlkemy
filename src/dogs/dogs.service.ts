import { BadRequestException, Injectable } from '@nestjs/common';
import { DogsDTO } from './dto/dogs.dto';
import { Dog } from './entity/dog.entity';
import { UpdateDogDTO } from './dto/update-dog.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DogsService {

    constructor(
        @InjectRepository(Dog)
        private readonly dogRepository: Repository<Dog>,
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {}

    async getAll(): Promise<Dog[]> {
        return await this.dogRepository.find();
    }

    async findOne(id: string): Promise<Dog> {
        return await this.dogRepository.findOneBy({id});
    }

    async create(createDogDTO: DogsDTO): Promise<Dog> {

        const { userID, ...rest } = createDogDTO;

        const userSearch = await this.userRepository.findOneBy({id: userID});

        if(!userSearch) throw new BadRequestException('User not found');

        const dogToSave = {
            ...rest,
            user: userSearch
        }

        const dog = this.dogRepository.create(dogToSave);
    
        return await this.dogRepository.save(dog);
    }

    async update(updateDogDTO: UpdateDogDTO, id: string): Promise<Dog> {
    
        const dog = await this.findOne(id);
        const user = await this.userRepository.findOneBy({id: updateDogDTO.userID});

        if(!dog || !user) throw new BadRequestException('Dog or User not found');

        const newDog = {
            id,
            ...dog,
            ...updateDogDTO,
            user: user,
        }

        return await this.dogRepository.save(newDog);
    }

    async deleteOne(id: string): Promise<void> {
        await this.dogRepository.delete(id);
    }
}
