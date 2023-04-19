
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, BaseEntity } from 'typeorm';
import { Quiz } from './quiz.entity';

@Entity('questions')
export class Question extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar' })
    question: string;

    @ManyToOne(() => Quiz, (quiz) => quiz.questions)
    quiz: Quiz
}
