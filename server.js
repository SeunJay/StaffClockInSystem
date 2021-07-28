import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import colors from 'colors';
import morgan from 'morgan';

import connectDB from './config/db.js';

import staffRoutes from './routes/staffRoutes.js';

dotenv.config();

connectDB();

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(cors());

app.use(express.json());

app.use('/api/staff', staffRoutes);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);

export default app;
