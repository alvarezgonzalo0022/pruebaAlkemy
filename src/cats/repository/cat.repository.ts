import { Injectable } from "@nestjs/common";
import { Cat } from "../entity/cat.entity";

@Injectable()
export class CatRepository {
    private catsArray: Cat[];

    constructor() {
        this.catsArray = [];
    }

    getAll(): Cat[] {
        return this.catsArray;
    }

    sayHello(): string {
        return `Hi, i am a cat`;
    }

    findOne(id: string): Cat {
        try {
            return this.catsArray.find(cat => cat.id === id);
        } catch (error) {
            console.log(error);
            throw new Error(error); 
        }
    }

    create(cat: Cat): Cat {
        try {
            this.catsArray.push(cat);
            return cat;          
        } catch (error) {
            console.log(error);
            throw new Error(error); 
        }
    }

    update(newCat: Cat): Cat {
        try {
            const index = this.catsArray.findIndex(cat => cat.id === newCat.id);
            this.catsArray[index] = newCat;
            return newCat;           
        } catch (error) {
            console.log(error);
            throw new Error(error); 
        }
    }
    
    deleteOne(id: string): boolean {
        try {
            this.catsArray = this.catsArray.filter(cat => cat.id !== id);
            return true;       
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}