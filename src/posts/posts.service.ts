import { Injectable } from '@nestjs/common';
import { PostsDTO } from './dto/posts.dto';

@Injectable()
export class PostsService {


    private postsArray: PostsDTO[] = [];

    getAll(): PostsDTO[] {
        return this.postsArray;
    }

    sayHello(): string {
        return `Hi, i am a post`;
    }

    findOne(title: string): PostsDTO {
        return this.postsArray.find(post => post.title === title);
    }

    create(createPostDTO: PostsDTO): string {
        this.postsArray.push(createPostDTO);
        return `Post created with title ${createPostDTO.title}`
    }
}
