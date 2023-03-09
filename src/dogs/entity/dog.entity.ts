import { User } from "src/users/entity/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity("dogs")
export class Dog {

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

    @ManyToOne(() => User, (user) => user.dogs, { nullable: true, onDelete: 'CASCADE' })
    user: User;
    
}