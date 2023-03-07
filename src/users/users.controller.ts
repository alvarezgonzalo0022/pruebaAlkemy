import { Body, Controller, Get, Param, Post, Patch, Delete } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersDTO } from "./dto/users.dto";
import { User } from "./entity/user.entity";
import { UpdateUserDTO } from "./dto/update-user.dto";

@Controller("/users")
export class UserController {

    constructor(
        private readonly userService: UsersService,
    ) {}

    @Get()
    getAll(): User[] {
        return this.userService.getAll();
    }

    @Get("/hello")
    sayHello(): string {
        return this.userService.sayHello();
    }

    @Get(':id')
    findOne(@Param('id') id: string): User {
      return this.userService.findOne(id);
    }

    @Post()
    create(@Body() createUserDTO: UsersDTO): User {
        return this.userService.create(createUserDTO);
    }

    @Patch(':id')
    update(@Body() updateUserDTO: UpdateUserDTO, @Param('id') id: string): User {
        return this.userService.update(updateUserDTO, id);
    }

    @Delete(':id')
    deleteOne(@Param('id') id: string): string {
      return this.userService.deleteOne(id);
    }

}