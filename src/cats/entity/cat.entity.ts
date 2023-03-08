import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("cats")
export class Cat {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column('text')
    name: string;

    @Column('int')
    age: number;

    @Column('int')
    legs: number;

    @Column('int')
    weight: number;
}