// src/controllers/quiz.controller.ts
import { Request, Response } from 'express';
import Student from '../models/student.model';

export const submitAnswers = async (req: Request, res: Response) => {
  try {
    const { name, quizId, answers } = req.body;

    console.log('Respostas recebidas:', req.body);

    // Validação básica para garantir que todos os campos estão presentes
    if (!name || !quizId || !answers || !Array.isArray(answers) || answers.length === 0) {
      return res.status(400).json({ error: 'Dados incompletos' });
    }

    // Criar um novo registro de estudante com os dados recebidos
    const newStudentResponse = new Student({
      name,
      quizId,
      answers
    });

    // Salvar o novo registro no MongoDB
    await newStudentResponse.save();

    // Retornar uma resposta de sucesso
    res.status(200).json({ message: 'Respostas salvas com sucesso' });
  } catch (error) {
    console.error('Erro ao salvar as respostas:', error);
    res.status(500).json({ error: 'Erro ao salvar as respostas' });
  }
};
