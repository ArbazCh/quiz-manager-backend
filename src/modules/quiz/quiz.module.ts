import { Module } from '@nestjs/common';
import { QuizController } from './controllers/quiz.controller';
import { QuizService } from './services/quiz.service';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { QuizRepository } from './quiz.repository';
import { Quiz } from './entities/quiz.entity';
import { QuestionController } from './controllers/question.controller';
import { QuestionService } from './services/question.service';
import { Question } from './entities/question.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Quiz, Question])],
    providers: [QuizService, QuestionService],
    controllers: [QuizController, QuestionController],


})
export class QuizModule { }
