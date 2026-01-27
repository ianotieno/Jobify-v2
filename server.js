import 'express-async-errors';
import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
import morgan from 'morgan';
import mongoose from 'mongoose';
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js';

import jobRouter from './routes/jobRouter.js';
import {validateTest} from './middleware/validationMiddleware.js';


if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  }

app.use(morgan('dev'));
app.use(express.json());
app.use('/api/v1/jobs', jobRouter);


app.post('/api/v1/test', validateTest,  

(req, res) => {
  const {name} = req.body;
  res.status(200).json({msg:`hello ${name}`});
});

app.use('*', (req, res) => {
  res.status(404).json({ msg: 'route does not exist' });
}
);

app.use(errorHandlerMiddleware);

const port = process.env.POST || 5100;


try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`server running on PORT ${port}....`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
