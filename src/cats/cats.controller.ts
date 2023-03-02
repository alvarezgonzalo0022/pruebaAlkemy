import { Body, Controller, Get, Post, } from "@nestjs/common";
import { CatsService } from "./cats.service";
import { CatsDTO } from "./dto/cats.dto";

@Controller("/cats")
export class CatController {

    constructor(
        private readonly catsService: CatsService,
    ) {}

    @Get()
    getAll() {
        return this.catsService.getAll();
    }

    @Get("/hello")
    sayHello() {
        return this.catsService.sayHello();
    }

    @Post()
    create(@Body() createCatDTO: CatsDTO) {
        return this.catsService.create(createCatDTO);
    }

}