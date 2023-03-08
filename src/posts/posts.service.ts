import { Injectable } from '@nestjs/common';
import { PostsDTO } from './dto/posts.dto';
import { Post } from './entity/post.entity';
import { v4 as uuid } from 'uuid';
import { UpdatePostsDTO } from './dto/update-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PostsService {

    constructor(
        @InjectRepository(Post)
        private readonly postsRepository: Repository<Post>,
    ) {}

    async getAll() {
        return this.postsRepository.find();
    }

    findOne(id: string) {
        return this.postsRepository.findOneBy({id});
    }

    async create(createPostDTO: PostsDTO) {

        const post = this.postsRepository.create(createPostDTO);

        return await this.postsRepository.save(post);

    }

    async update(updatePostDTO: UpdatePostsDTO, id: string) {

        const post = this.findOne(id);

        const postAGuardar = {
            id,
            ...post,
            ...updatePostDTO
        }

        return await this.postsRepository.save(postAGuardar);
    }

    async deleteOne(id: string) {
        return await this.postsRepository.delete(id);
    }
}
