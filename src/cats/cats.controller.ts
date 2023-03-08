import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post, } from "@nestjs/common";
import { CatsService } from "./cats.service";
import { CatsDTO } from "./dto/cats.dto";
import { UpdateCatDto } from "./dto/update-cat.dto";
import { Cat } from "./entity/cat.entity";

@Controller("/cats")
export class CatController {

    constructor(
        private readonly catsService: CatsService,
    ) {}

    @Get()
    getAll() {
        return this.catsService.getAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.catsService.findOne(id);
    }

    @Post()
    create(@Body() createCatDTO: CatsDTO) {
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