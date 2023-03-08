import { BadRequestException, Injectable } from '@nestjs/common';
import { CatsDTO } from './dto/cats.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cat } from './entity/cat.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CatsService {

    constructor(
        @InjectRepository(Cat)
        private readonly catRepository: Repository<Cat>,
    ) {}

    async getAll(): Promise<Cat[]> {
        return await this.catRepository.find();
    }

    async findOne(id: string) {
        return this.catRepository.findOneBy({id});
    }

    async create(createCatDTO: CatsDTO) {
        const cat = this.catRepository.create(createCatDTO);
        return await this.catRepository.save(cat);
    }

    async update(updateCatDTO: UpdateCatDto, id: string) {

        const cat = this.findOne(id);

        if(!cat) throw new BadRequestException('Cat not found');

        const newCat = {
            id,
            ...cat,
            ...updateCatDTO
        }
        return await this.catRepository.save(newCat);
    }

    deleteOne(id: string) {
        return this.catRepository.delete(id);
    }
}
