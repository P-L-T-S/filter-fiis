import express from 'express';
import cors from 'cors';
import setHeader from './middleware/setHeader';
import { router } from './routes';

const server = express();

server.use(cors());

server.use(express.json());

server.use(setHeader);

server.use(router);

server.listen(3030);
