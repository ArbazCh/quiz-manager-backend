import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm'
// import { QuizRepository } from "./quiz.repository";
import { CreateQuizDto } from "../dto/CreateQuiz.dto";
import { Repository } from 'typeorm';
import { Quiz } from "../entities/quiz.entity";

@Injectable()

export class QuizService {
    constructor(@InjectRepository(Quiz) private quizRepository: Repository<Quiz>) { } //changed QuizRepository Repository<Quiz>

    getAllQuize() {
        return [1, 2, 3]
    }

    async getQuizById(id: number): Promise<Quiz> {
        return await this.quizRepository.findOne({
            relations: ['questions'], where: {
                id: id
            }
        })
    }

    async createNewQuiz(quiz: CreateQuizDto) {
        return await this.quizRepository.save(quiz)
    }
}