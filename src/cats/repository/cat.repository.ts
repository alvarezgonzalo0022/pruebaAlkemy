import { CatsDTO } from "../dto/cats.dto";
import { v4 as uuid } from 'uuid';
import { BadGatewayException, BadRequestException, Injectable } from "@nestjs/common";
import { UpdateCatDto } from "../dto/update-cat.dto";

@Injectable()
export class CatRepository {
    private catsArray = [];

    getAll(): CatsDTO[] {
        return this.catsArray;
    }

    sayHello(): string {
        return `Hi, i am a cat`;
    }

    findOne(name: string): CatsDTO {
        return this.catsArray.find(cat => cat.name === name);
    }

    create(cat: CatsDTO) {
        this.catsArray.push(cat);
    }

    update(newCat) {
        this.catsArray = this.catsArray.map(cat => {
            if (cat.id === newCat.id) {
                cat = newCat;
            }
        })
    }
    
    deleteOne(id: string) {
        this.catsArray = this.catsArray.filter(cat => cat.id !== id);
    }
}