import express from 'express';
const app = express();
import userRouter from './modules/users/index.mjs';
app.use(express.json());
app.use('/api', userRouter);

export default app;