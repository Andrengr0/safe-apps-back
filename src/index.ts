import express from 'express';
import cors from 'cors';
import quizRoutes from './routes/quiz.routes';
import { connectDB } from './database/connection';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Middleware para habilitar CORS
app.use(cors({
  origin: '*',  // Permitir apenas a origem do frontend
  methods: ['GET', 'POST'],  // Definir os métodos permitidos
  allowedHeaders: ['Content-Type', 'Authorization'],  // Cabeçalhos permitidos
}));


// Rotas
app.use('/api', quizRoutes);

// Conexão com o MongoDB e Inicialização do Servidor
connectDB().then(() => {
  app.listen(3333, () => {
    console.log('Servidor rodando na porta 3333');
  });
}).catch((error) => {
  console.error('Erro ao conectar ao MongoDB', error);
});


