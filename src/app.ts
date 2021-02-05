const params = require('strong-params');
import bodyParser from 'body-parser';
import express from 'express';
import { NOT_FOUND_STATUS_CODE, NOT_FOUND_STATUS_MESSAGE } from './config/constants';
import { Logger } from './lib/logger';
import { middlewares } from './middlewares/error.handler';
import { routes as apiRouter } from './routes/index';
import passport from 'passport';

const app = express();
const logger = new Logger();

app.use(bodyParser.json({ limit: '50mb', type: 'application/json' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(params.expressMiddleware());
app.use(logger.getRequestLogger());
app.use(passport.initialize());

app.use('/api', apiRouter);
app.get('/health', (req, res) => res.json({ status: true, message: 'Health OK!' }));

app.use(logger.getRequestErrorLogger());

app.use((req, res, next) => {
  const err = new Error(NOT_FOUND_STATUS_MESSAGE);
  res.statusCode = NOT_FOUND_STATUS_CODE;
  res.send(err.message);
});

app.use(middlewares.handleRequestError);
export { app };
