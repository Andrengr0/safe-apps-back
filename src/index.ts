// src/index.ts
import express from 'express';
import quizRoutes from './routes/quiz.routes';
import { connectDB } from './database/connection';

const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Rotas
app.use('/api', quizRoutes);

// Conexão com o MongoDB e Inicialização do Servidor
connectDB().then(() => {
  app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
  });
}).catch((error) => {
  console.error('Erro ao conectar ao MongoDB', error);
});
