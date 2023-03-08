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
    getAll() {
        return this.dogsService.getAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Dog> {
      return this.dogsService.findOne(id);
    }

    @Post()
    create(@Body() createDogDTO: DogsDTO): Promise<Dog> {
        return this.dogsService.create(createDogDTO);
    }

    @Patch(':id')
    update(@Body() updateDogDTO: UpdateDogDTO, @Param('id', ParseUUIDPipe) id: string): Promise<Dog> {
        return this.dogsService.update(updateDogDTO, id);
    }

    @Delete(':id')
    deleteOne(@Param('id', ParseUUIDPipe) id: string): void {
      this.dogsService.deleteOne(id);
    }


}