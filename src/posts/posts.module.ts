import { Module } from '@nestjs/common';
import { PostController } from './posts.controller';
import { PostsService } from './posts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './entity/post.entity';

@Module({
    controllers: [PostController],
    providers: [PostsService],
    imports: [
        TypeOrmModule.forFeature([Post])
    ]
})
export class PostsModule {}
