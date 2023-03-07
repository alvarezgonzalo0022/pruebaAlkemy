import { Body, Controller, Get, Param, Post, Patch, Delete, ParseUUIDPipe } from "@nestjs/common";
import { DogsService } from "./dogs.service";
import { DogsDTO } from "./dto/dogs.dto";
import { UpdateDogDTO } from "./dto/update-dog.dto";
import { Dog } from "./entity/dog.entity";

@Controller("/dogs")
export class DogController {

    constructor(
        private readonly dogsService: DogsService,
    ) {}

    @Get()
    getAll(): Dog[] {
        return this.dogsService.getAll();
    }

    @Get("/hello")
    sayHello(): string {
        return this.dogsService.sayHello();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Dog {
      return this.dogsService.findOne(id);
    }

    @Post()
    create(@Body() createDogDTO: DogsDTO): Dog {
        return this.dogsService.create(createDogDTO);
    }

    @Patch(':id')
    update(@Body() updateDogDTO: UpdateDogDTO, @Param('id', ParseUUIDPipe) id: string): Dog {
        return this.dogsService.update(updateDogDTO, id);
    }

    @Delete(':id')
    deleteOne(@Param('id', ParseUUIDPipe) id: string): string {
      return this.dogsService.deleteOne(id);
    }


}