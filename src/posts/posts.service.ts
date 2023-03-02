import { Injectable } from '@nestjs/common';
import { PostsDTO } from './dto/posts.dto';

@Injectable()
export class PostsService {


    private postsArray: PostsDTO[] = [];

    getAll() {
        return this.postsArray;
    }

    sayHello() {
        return `Hi, i am a post`;
    }

    create(createPostDTO: PostsDTO) {
        this.postsArray.push(createPostDTO);
        return `Post created with name ${createPostDTO.title}`
    }
}
