
import { Column, Entity, PrimaryGeneratedColumn, OneToMany, BaseEntity } from 'typeorm';
import { Question } from './question.entity';

@Entity('quizes')
export class Quiz extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 500 })
    title: string;

    @Column('text')
    description: string;

    @Column({
        type: 'boolean',
        default: 1
    })
    isActive: boolean;
    default: 1

    @OneToMany(() => Question, (question) => question.quiz)
    questions: Question[]
}
