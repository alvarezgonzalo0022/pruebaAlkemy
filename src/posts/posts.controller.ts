import { Body, Controller, Get, Param, Post, Patch, Delete } from "@nestjs/common";
import { PostsService } from "./posts.service";
import { PostsDTO } from "./dto/posts.dto";
import { Post as Posts } from "./entity/post.entity";
import { UpdatePostsDTO } from "./dto/update-post.dto";

@Controller("/posts")
export class PostController {

    constructor(
        private readonly postsService: PostsService,
    ) {}

    @Get()
    getAll(): Promise<Posts[]> {
        return this.postsService.getAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Posts> {
      return this.postsService.findOne(id);
    }

    @Post()
    create(@Body() createPOSTDTO: PostsDTO): Promise<Posts> {
        return this.postsService.create(createPOSTDTO);
    }

    @Patch(':id')
    update(@Body() updatePOSTDTO: UpdatePostsDTO, @Param('id') id: string): Promise<Posts> {
        return this.postsService.update(updatePOSTDTO, id);
    }

    @Delete(':id')
    deleteOne(@Param('id') id: string): void {
        this.postsService.deleteOne(id);
    }

}