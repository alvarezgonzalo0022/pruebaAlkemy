import { Injectable } from '@nestjs/common';
import { DogsDTO } from './dto/dogs.dto';

@Injectable()
export class DogsService {

    private dogsArray: DogsDTO[] = [];

    getAll(): DogsDTO[] {
        return this.dogsArray;
    }

    sayHello(): string {
        return `Hi, i am a dog`;
    }

    findOne(name: string): DogsDTO {
        return this.dogsArray.find(dog => dog.name === name);
    }

    create(createDogDTO: DogsDTO): string {
        this.dogsArray.push(createDogDTO);
        return `Dog created with name ${createDogDTO.name}`
    }
}
