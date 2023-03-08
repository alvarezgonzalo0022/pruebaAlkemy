import { Global, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Cat } from "src/cats/entity/cat.entity";
import { Dog } from "src/dogs/entity/dog.entity";
import { Post } from "src/posts/entity/post.entity";
import { User } from "src/users/entity/user.entity";

@Global()
@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            useFactory: () => ({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: "12345678",
                database: 'test',
                entities: [Dog, Cat, User, Post],
                synchronize: true,
                keepConnectionAlive: true,
                retryAttempts: 3,
                retryDelay: 1000,
            })
        })
    ]
})
export class DatabaseModule {}