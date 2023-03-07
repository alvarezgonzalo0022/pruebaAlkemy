import { User } from "../entity/user.entity";

export class UserRepository {

    private usersArray: User[];

    constructor() {
        this.usersArray = [];
    }

    getAll(): User[] {
        return this.usersArray;
    }

    sayHello(): string {
        return "Hi, i am an user";
    }

    findOne(id: string): User {
        return this.usersArray.find(user => user.id === id);
    }

    create(user: User): User {
        try {
            this.usersArray.push(user);
            return user;
        } catch (error) {
            console.log(error);
            throw new Error(error);
            
        }
    }

    update(newUser: User): User {
        try {
            const index = this.usersArray.findIndex(user => user.id === newUser.id);
            this.usersArray[index] = newUser;
            return newUser;
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }

    deleteOne(id: string): boolean {
        try {
            this.usersArray = this.usersArray.filter(user => user.id !== id);
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

}