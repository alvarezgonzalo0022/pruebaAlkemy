import { Injectable } from '@nestjs/common';
import { DogsDTO } from './dto/dogs.dto';
import { Dog } from './entity/dog.entity';
import { v4 as uuid } from 'uuid';
import { UpdateDogDTO } from './dto/update-dog.dto';
import { DogRepository } from './repository/dog.repository';

@Injectable()
export class DogsService {

    constructor(
        private readonly dogRepository: DogRepository,
    ) {}

    getAll(): Dog[] {
        return this.dogRepository.getAll();
    }

    sayHello(): string {
        return this.dogRepository.sayHello();
    }

    findOne(id: string): Dog {
        return this.dogRepository.findOne(id);
    }

    create(createDogDTO: DogsDTO): Dog {
        const dog: Dog = {
            id: uuid(),
            name: createDogDTO.name,
            age: createDogDTO.age,
            legs: createDogDTO.legs,
            weight: createDogDTO.weight
        }
    
        return this.dogRepository.create(dog);
    }

    update(updateDogDTO: UpdateDogDTO, id: string): Dog {
        const newDog: Dog = {
            id: id,
            name: updateDogDTO.name,
            age: updateDogDTO.age,
            legs: updateDogDTO.legs,
            weight: updateDogDTO.weight
        }

        return this.dogRepository.update(newDog);
    }

    deleteOne(id: string): string {
        return this.dogRepository.deleteOne(id) ? `Dog with id: ${id} successfully deleted` : `Dog with id: ${id} not found`;
    }
}
