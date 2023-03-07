import { Injectable } from '@nestjs/common';
import { CatsDTO } from './dto/cats.dto';
import { v4 as uuid } from 'uuid';
import { UpdateCatDto } from './dto/update-cat.dto';
import { CatRepository } from './repository/cat.repository';
import { Cat } from './entity/cat.entity';

@Injectable()
export class CatsService {

    constructor(
        private readonly catRepository: CatRepository,
    ) {}

    getAll(): Cat[] {
        return this.catRepository.getAll();
    }

    sayHello(): string {
        return this.catRepository.sayHello();
    }

    findOne(id: string): Cat {
        return this.catRepository.findOne(id);
    }

    create(createCatDTO: CatsDTO): Cat {
       const cat: Cat = {
        id: uuid(),
        name: createCatDTO.name,
        age: createCatDTO.age,
        legs: createCatDTO.legs,
        weight: createCatDTO.weight,
    }
    return this.catRepository.create(cat);
    }

    update(updateCatDTO: UpdateCatDto, id: string): Cat {
        const newCat: Cat = {
            id: id,
            name: updateCatDTO.name,
            age: updateCatDTO.age,
            legs: updateCatDTO.legs,
            weight: updateCatDTO.weight,
        }
        return this.catRepository.update(newCat);
    }

    deleteOne(id: string): string {
        return this.catRepository.deleteOne(id) ? `Cat with id: ${id} successfully deleted` : `Cat with id: ${id} not found`;
    }
}
