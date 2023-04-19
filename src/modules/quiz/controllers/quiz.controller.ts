import { Body, Controller, Get, Post, UsePipes, ValidationPipe, Param, ParseIntPipe } from '@nestjs/common';
import { QuizService } from '../services/quiz.service';
import { CreateQuizDto } from '../dto/CreateQuiz.dto';


@Controller('quiz')
export class QuizController {
    constructor(private readonly quizService: QuizService) { }

    @Get('/')
    getAllQuiz() {
        return this.quizService.getAllQuize()
    }

    @Get('/:id')
    async getQuizById(@Param('id', ParseIntPipe) id: number) {
        return await this.quizService.getQuizById(id)

    }

    @Post('/create')
    @UsePipes(ValidationPipe)

    async createQuiz(@Body() quizData: CreateQuizDto) {
        return await this.quizService.createNewQuiz(quizData)

    }


}
