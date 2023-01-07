import express,{ Request,Response } from 'express';
import { router}  from './routes/routes';
import connects from './config/db';

const app = express();
const PORT = process.env.PORT || 4011;

app.use(express.json());
app.use('/', router);
connects();

app.listen(PORT, ():void => {
    console.log("Server running...");
})