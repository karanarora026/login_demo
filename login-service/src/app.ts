import express from 'express';
import expressLoader from '@services/express';
import mongooseLoader from '@services/mongoose';

const app = express();

expressLoader(app);
mongooseLoader(app);