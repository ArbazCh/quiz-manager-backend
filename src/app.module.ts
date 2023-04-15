import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuizModule } from './modules/quiz/quiz.module';
// import { QuizController } from '../src/modules/quiz/quiz.controller';

@Module({
  imports: [QuizModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
