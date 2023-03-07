import { Module } from '@nestjs/common';
import { DogController } from './dogs.controller';
import { DogsService } from './dogs.service';
import { DogRepository } from './repository/dog.repository';

@Module({
    controllers: [DogController],
    providers: [DogsService, DogRepository]
})
export class DogsModule {}
