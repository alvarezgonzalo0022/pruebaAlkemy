import { Body, Controller, Get, Post, } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersDTO } from "./dto/users.dto";

@Controller("/users")
export class UserController {

    constructor(
        private readonly userService: UsersService,
    ) {}

    @Get()
    getAll() {
        return this.userService.getAll();
    }

    @Get("/hello")
    sayHello() {
        return this.userService.sayHello();
    }

    @Post()
    create(@Body() createUserDTO: UsersDTO) {
        return this.userService.create(createUserDTO);
    }

}