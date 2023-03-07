import { Injectable } from '@nestjs/common';
import { PostsDTO } from './dto/posts.dto';
import { Post } from './entity/post.entity';
import { PostRepository } from './repository/post.repository';
import { v4 as uuid } from 'uuid';
import { UpdatePostsDTO } from './dto/update-post.dto';

@Injectable()
export class PostsService {

    constructor(
        private readonly postsRepository: PostRepository,
    ) {}

    getAll(): Post[] {
        return this.postsRepository.getAll();
    }

    sayHello(): string {
        return this.postsRepository.sayHello();
    }

    findOne(id: string): Post {
        return this.postsRepository.findOne(id);
    }

    create(createPostDTO: PostsDTO): Post {

        const post: Post = {
            id: uuid(),
            title: createPostDTO.title,
            author: createPostDTO.author,
            description: createPostDTO.description,
        }

        return this.postsRepository.create(post);

    }

    update(updatePostDTO: UpdatePostsDTO, id: string): Post {

        const newPost: Post = {
            id: id,
            title: updatePostDTO.title,
            author: updatePostDTO.author,
            description: updatePostDTO.description,
        }

        return this.postsRepository.update(newPost);
    }

    deleteOne(id: string): string {
        return this.postsRepository.deleteOne(id) ? `Post with id: ${id} successfully deleted` : `Post with id: ${id} not found`;
    }
}
