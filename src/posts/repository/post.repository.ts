import { Injectable } from "@nestjs/common";
import { Post } from "../entity/post.entity";

@Injectable()
export class PostRepository {
    private postsArray: Post[];

    constructor() {
        this.postsArray = [];
    }

    getAll(): Post[] {
        return this.postsArray;
    }

    sayHello(): string {
        return `Hi, i am a post`;
    }

    findOne(id: string): Post {
        try {
            return this.postsArray.find(post => post.id === id);
        } catch (error) {
            console.log(error);
            throw new Error(error); 
        }
    }

    create(post: Post): Post {
        try {
            this.postsArray.push(post);
            return post;          
        } catch (error) {
            console.log(error);
            throw new Error(error); 
        }
    }

    update(newPost: Post): Post {
        try {
            const index = this.postsArray.findIndex(post => post.id === newPost.id);
            this.postsArray[index] = newPost;
            return newPost;             
        } catch (error) {
            console.log(error);
            throw new Error(error); 
        }
    }
    
    deleteOne(id: string): boolean {
        try {
            this.postsArray = this.postsArray.filter(post => post.id !== id);
            return true;       
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}