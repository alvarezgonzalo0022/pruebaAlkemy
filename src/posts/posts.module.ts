import { Module } from '@nestjs/common';
import { PostController } from './posts.controller';
import { PostsService } from './posts.service';
import { PostRepository } from './repository/post.repository';

@Module({
    controllers: [PostController],
    providers: [PostsService, PostRepository]
})
export class PostsModule {}
