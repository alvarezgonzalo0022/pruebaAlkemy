import { Module } from '@nestjs/common';
import { CatController } from './cats.controller';
import { CatsService } from './cats.service';
import { CatRepository } from './repository/cat.repository';

@Module({
    controllers: [CatController],
    providers: [CatsService, CatRepository],
})
export class CatsModule {}
