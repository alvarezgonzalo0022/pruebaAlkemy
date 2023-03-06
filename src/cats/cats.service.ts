import { BadRequestException, Injectable } from '@nestjs/common';
import { CatsDTO } from './dto/cats.dto';
import { v4 as uuid } from 'uuid';
import { UpdateCatDto } from './dto/update-cat.dto';
import { CatRepository } from './repository/cat.repository';

@Injectable()
export class CatsService {

    constructor(
        private readonly catRepository: CatRepository,
    ) {}

    getAll(): CatsDTO[] {
        return this.catRepository.getAll();
    }

    sayHello(): string {
        return this.catRepository.sayHello();
    }

    findOne(name: string): CatsDTO {
        return this.catRepository.findOne(name);
    }

    create(createCatDTO: CatsDTO): string {
       const cat = {
        id: uuid(),
        name: createCatDTO.name,
        age: createCatDTO.age,
        legs: createCatDTO.legs,
        weight: createCatDTO.weight,
    }
    this.catRepository.create(cat);
    return `Cat created with name ${createCatDTO.name}`;
    }

    update(updateCatDTO: UpdateCatDto, id: string) {
        const newCat = {
            id: id,
            name: updateCatDTO.name,
            age: updateCatDTO.age,
            legs: updateCatDTO.legs,
            weight: updateCatDTO.weight,
        }
        return this.catRepository.update(newCat);
    }
    deleteOne(id: string) {
        return this.catRepository.deleteOne(id);
    }
}
