import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("posts")
export class Post {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column('text')
    title: string;

    @Column('text')
    description: string;

    @Column('text')
    author: string;

}