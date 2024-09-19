// src/routes/quiz.routes.ts

import { Router } from 'express';
import { submitAnswers } from '../controllers/quiz.controller';

const router = Router();

router.post('/submit-answer', submitAnswers);

export default router;
