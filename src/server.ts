import express from 'express';
import {routes} from './routes';

const app = express();

app.use(express.json());
app.use('/api/v1', routes);

app.get('/', (req, res) => res.status(200).send('Api is running'));

app.listen(3000, () => console.log('Server is running on port 3000'));
