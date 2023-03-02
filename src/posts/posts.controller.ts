import { Body, Controller, Get, Post, } from "@nestjs/common";
import { PostsService } from "./posts.service";
import { PostsDTO } from "./dto/posts.dto";

@Controller("/posts")
export class PostController {

    constructor(
        private readonly postsService: PostsService,
    ) {}

    @Get()
    getAll() {
        return this.postsService.getAll();
    }

    @Get("/hello")
    sayHello() {
        return this.postsService.sayHello();
    }

    @Post()
    create(@Body() createPOSTDTO: PostsDTO) {
        return this.postsService.create(createPOSTDTO);
    }

}