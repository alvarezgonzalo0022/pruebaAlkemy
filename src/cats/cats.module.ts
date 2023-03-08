import { Module } from '@nestjs/common';
import { CatController } from './cats.controller';
import { CatsService } from './cats.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cat } from './entity/cat.entity';

@Module({
    controllers: [CatController],
    providers: [CatsService],
    imports: [
        TypeOrmModule.forFeature([Cat])
    ]
})
export class CatsModule {}
