import cors from 'cors';
import express, { Response, Request, NextFunction } from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import HealthCheckController from 'Controllers/HealthCheckController';
import GreetingController from 'Controllers/GreetingController';

const app = express();
const corsOptions = {
  origin: process.env.CLIENT_URL,
  credentials: true,
  methods: ['GET', 'OPTIONS', 'POST', 'PUT', 'HEAD']
};
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors(corsOptions));

app.get('/', (req: Request, res: Response, unusedNext: NextFunction) => {
  return HealthCheckController.index(req, res);
});

app.use((req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (authorization === 'my-secret') {
    return next();
  } else {
    return res.status(401).send('Unauthorized');
  }
})

app.get('/random-greeting', (req: Request, res: Response, unusedNext: NextFunction) => {
  return GreetingController.randomGreeting(req, res);
});

export default app;
