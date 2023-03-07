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
    getAll(): Posts[] {
        return this.postsService.getAll();
    }

    @Get("/hello")
    sayHello(): string {
        return this.postsService.sayHello();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Posts {
      return this.postsService.findOne(id);
    }

    @Post()
    create(@Body() createPOSTDTO: PostsDTO): Posts {
        return this.postsService.create(createPOSTDTO);
    }

    @Patch(':id')
    update(@Body() updatePOSTDTO: UpdatePostsDTO, @Param('id') id: string): Posts {
        return this.postsService.update(updatePOSTDTO, id);
    }

    @Delete(':id')
    deleteOne(@Param('id') id: string): string {
        return this.postsService.deleteOne(id);
    }

}