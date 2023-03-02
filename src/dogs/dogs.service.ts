import { Injectable } from '@nestjs/common';
import { DogsDTO } from './dto/dogs.dto';

@Injectable()
export class DogsService {

    private dogsArray: DogsDTO[] = [];

    getAll() {
        return this.dogsArray;
    }

    sayHello() {
        return `Hi, i am a dog`;
    }

    create(createDogDTO: DogsDTO) {
        this.dogsArray.push(createDogDTO);
        return `Dog created with name ${createDogDTO.name}`
    }
}
