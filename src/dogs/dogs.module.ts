import { Module } from '@nestjs/common';
import { DogController } from './dogs.controller';
import { DogsService } from './dogs.service';

@Module({
    controllers: [DogController],
    providers: [DogsService]
})
export class DogsModule {}
