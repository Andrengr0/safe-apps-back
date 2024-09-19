// src/models/student.model.ts
import { Schema, model, Document } from 'mongoose';

// Interface para as respostas de um quiz
interface IAnswer {
  questionId: string;
  correct: boolean;
}

// Interface para o estudante (nome, quiz e respostas)
interface IStudent extends Document {
  name: string;
  quizId: string;
  answers: IAnswer[];
}

// Esquema para as respostas do quiz
const AnswerSchema = new Schema<IAnswer>({
  questionId: { type: String, required: true },
  correct: { type: Boolean, required: true },
});

// Esquema para o estudante e o quiz respondido
const StudentSchema = new Schema<IStudent>({
  name: { type: String, required: true },
  quizId: { type: String, required: true },
  answers: [AnswerSchema], // Um array de respostas para o quiz
});

// Modelo para o estudante e quiz respondido
const Student = model<IStudent>('Student', StudentSchema);
export default Student;
