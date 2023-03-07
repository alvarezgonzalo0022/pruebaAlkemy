import { Injectable } from "@nestjs/common";
import { Dog } from "../entity/dog.entity";

@Injectable()
export class DogRepository {
    private dogsArray: Dog[];

    constructor() {
        this.dogsArray = [];
    }

    getAll(): Dog[] {
        return this.dogsArray;
    }

    sayHello(): string {
        return `Hi, i am a dog`;
    }

    findOne(id: string): Dog {
        try {
            return this.dogsArray.find(dog => dog.id === id);
        } catch (error) {
            console.log(error);
            throw new Error(error); 
        }
    }

    create(dog: Dog): Dog {
        try {
            this.dogsArray.push(dog);
            return dog;          
        } catch (error) {
            console.log(error);
            throw new Error(error); 
        }
    }

    update(newDog: Dog): Dog {
        try {
            const index = this.dogsArray.findIndex(dog => dog.id === newDog.id);
            this.dogsArray[index] = newDog;
            return newDog;          
        } catch (error) {
            console.log(error);
            throw new Error(error); 
        }
    }
    
    deleteOne(id: string): boolean {
        try {
            this.dogsArray = this.dogsArray.filter(dog => dog.id !== id);
            return true;       
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}