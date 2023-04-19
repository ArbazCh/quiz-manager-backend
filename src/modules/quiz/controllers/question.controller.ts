import { Body, Controller, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { CreateQuestionDto } from "../dto/CreateQuestion.dto";
import { QuizService } from "../services/quiz.service";
import { QuestionService } from "../services/question.service";
import { Question } from "../entities/question.entity";


@Controller('question')

export class QuestionController {
    constructor(private readonly questionService: QuestionService, private quizService: QuizService) { }

    @Post("")
    @UsePipes(ValidationPipe)

    async saveQuestion(@Body() question: CreateQuestionDto): Promise<Question> {
        const quiz = await this.quizService.getQuizById(question.quizId)
        return await this.questionService.craeteQuestion(question, quiz)
    }

}