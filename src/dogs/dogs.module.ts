import { Module } from '@nestjs/common';
import { DogController } from './dogs.controller';
import { DogsService } from './dogs.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dog } from './entity/dog.entity';
import { User } from 'src/users/entity/user.entity';

@Module({
    controllers: [DogController],
    providers: [DogsService],
    imports: [
        TypeOrmModule.forFeature([Dog, User])
    ]
})
export class DogsModule {}
