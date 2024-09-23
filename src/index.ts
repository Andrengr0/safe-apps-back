import express from 'express';
import cors from 'cors';
import quizRoutes from './routes/quiz.routes';
import { connectDB } from './database/connection';

const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Middleware para habilitar CORS
app.use(cors({
  origin: 'http://localhost:5173',  // Permitir requisições do frontend
  methods: ['GET', 'POST'],  // Definir os métodos permitidos
}));

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
