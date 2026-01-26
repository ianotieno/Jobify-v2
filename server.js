import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
import morgan from 'morgan';


import jobRouter from './routes/jobRouter.js';



if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  }

app.use(morgan('dev'));
app.use(express.json());
app.use('/api/v1/jobs', jobRouter);

app.use('*', (req, res) => {
  res.status(404).json({ msg: 'route does not exist' });
}
);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ msg: 'something went wrong, please try again' });
}
);

const port = process.env.POST || 5100;

app.listen(port, () => {
  console.log('server running....');
});