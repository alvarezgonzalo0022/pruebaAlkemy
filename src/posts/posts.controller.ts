import { Body, Controller, Get, Param, Post, } from "@nestjs/common";
import { PostsService } from "./posts.service";
import { PostsDTO } from "./dto/posts.dto";

@Controller("/posts")
export class PostController {

    constructor(
        private readonly postsService: PostsService,
    ) {}

    @Get()
    getAll(): PostsDTO[] {
        return this.postsService.getAll();
    }

    @Get("/hello")
    sayHello(): string {
        return this.postsService.sayHello();
    }

    @Get(':title')
    findOne(@Param('title') title: string): PostsDTO {
      return this.postsService.findOne(title);
    }

    @Post()
    create(@Body() createPOSTDTO: PostsDTO): string {
        return this.postsService.create(createPOSTDTO);
    }

}