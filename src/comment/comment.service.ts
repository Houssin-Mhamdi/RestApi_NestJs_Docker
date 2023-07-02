import { Injectable } from '@nestjs/common';

@Injectable()
export class CommentService {

    findUserComment(userId: string){
        return "this is a comment"
    }
}
