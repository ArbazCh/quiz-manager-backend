import { Injectable } from "@nestjs/common";

@Injectable()

export class QuizService {

    getAllQuize() {
        return [1, 2, 3]
    }
}