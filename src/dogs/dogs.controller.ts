import { Body, Controller, Get, Param, Post, } from "@nestjs/common";
import { DogsService } from "./dogs.service";
import { DogsDTO } from "./dto/dogs.dto";

@Controller("/dogs")
export class DogController {

    constructor(
        private readonly dogsService: DogsService,
    ) {}

    @Get()
    getAll(): DogsDTO[] {
        return this.dogsService.getAll();
    }

    @Get("/hello")
    sayHello(): string {
        return this.dogsService.sayHello();
    }

    @Get(':name')
    findOne(@Param('name') name: string): DogsDTO {
      return this.dogsService.findOne(name);
    }

    @Post()
    create(@Body() createDogDTO: DogsDTO): string {
        return this.dogsService.create(createDogDTO);
    }

}