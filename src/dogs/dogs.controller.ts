import { Body, Controller, Get, Post, } from "@nestjs/common";
import { DogsService } from "./dogs.service";
import { DogsDTO } from "./dto/dogs.dto";

@Controller("/dogs")
export class DogController {

    constructor(
        private readonly dogsService: DogsService,
    ) {}

    @Get()
    getAll() {
        return this.dogsService.getAll();
    }

    @Get("/hello")
    sayHello() {
        return this.dogsService.sayHello();
    }

    @Post()
    create(@Body() createDogDTO: DogsDTO) {
        return this.dogsService.create(createDogDTO);
    }

}