import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post, } from "@nestjs/common";
import { CatsService } from "./cats.service";
import { CatsDTO } from "./dto/cats.dto";
import { UpdateCatDto } from "./dto/update-cat.dto";

@Controller("/cats")
export class CatController {

    constructor(
        private readonly catsService: CatsService,
    ) {}

    @Get()
    getAll(): CatsDTO[] {
        return this.catsService.getAll();
    }

    @Get("/hello")
    sayHello(): string {
        return this.catsService.sayHello();
    }

    @Get(':name')
    findOne(@Param('name') name: string) {
      return this.catsService.findOne(name);
    }

    @Post()
    create(@Body() createCatDTO: CatsDTO): string {
        return this.catsService.create(createCatDTO);
    }

    @Patch(':id')
    update(@Body() updateCatDTO: UpdateCatDto, @Param('id', ParseUUIDPipe) id: string) {
        return this.catsService.update(updateCatDTO, id);
    }

    @Delete(':id')
    deleteOne(@Param('id', ParseUUIDPipe) id: string) {
      return this.catsService.deleteOne(id);
    }

}