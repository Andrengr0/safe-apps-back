// src/database/connection.ts
import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://safeapps:RW8LvGjyBPy3Wey7@safeappsdb.2vkjn.mongodb.net/?retryWrites=true&w=majority&appName=SafeAppsDB');
    console.log('Conectado ao MongoDB');
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB', error);
    throw error; // Re-lança o erro para ser capturado no index.ts
  }
};
