import { Body, Controller, Get, Param, Post, } from "@nestjs/common";
import { UsersService } from "./users.service";
import { UsersDTO } from "./dto/users.dto";

@Controller("/users")
export class UserController {

    constructor(
        private readonly userService: UsersService,
    ) {}

    @Get()
    getAll(): UsersDTO[] {
        return this.userService.getAll();
    }

    @Get("/hello")
    sayHello(): string {
        return this.userService.sayHello();
    }

    @Get(':name')
    findOne(@Param('name') name: string): UsersDTO {
      return this.userService.findOne(name);
    }

    @Post()
    create(@Body() createUserDTO: UsersDTO): string {
        return this.userService.create(createUserDTO);
    }

}