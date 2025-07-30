import express from 'express';
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import userRoutes from './routes/userRoutes.js';
import taskRoutes from './routes/taskRoutes.js';

app.use('/users', userRoutes);
app.use('/tasks', taskRoutes);

export default app;
