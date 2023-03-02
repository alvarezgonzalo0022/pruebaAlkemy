import { Injectable } from '@nestjs/common';
import { CatsDTO } from './dto/cats.dto';

@Injectable()
export class CatsService {

    private catsArray: CatsDTO[] = [];

    getAll() {
        return this.catsArray;
    }

    sayHello() {
        return `Hi, i am a cat`;
    }

    create(createCatDTO: CatsDTO) {
        this.catsArray.push(createCatDTO);
        return `Cat created with name ${createCatDTO.name}`
    }


}
