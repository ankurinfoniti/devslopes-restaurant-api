import express from 'express';
import mongoose from 'mongoose';

import config from './config';
import routes from './routes';

const app = express();

// middleware

// passport config

// api route v1
app.use('/v1', routes);

app.listen(config.port, () => {
  console.log(`App is listening on port ${config.port}`);
});

export default app;
