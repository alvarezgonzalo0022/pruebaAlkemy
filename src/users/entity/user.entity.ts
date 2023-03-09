import { Dog } from "src/dogs/entity/dog.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
export class User {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column('text')
    name: string;

    @Column('int')
    age: number;

    @Column('text')
    email: string;

    @OneToMany(type => Dog, dog => dog.user)
    dogs: Dog[];

}