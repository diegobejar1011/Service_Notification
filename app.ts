import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import { db } from './shared/database/application/connection';
import { indexRouter } from './shared/indexRouter';

config();

const app = express();

app.use(cors());
app.use(express.json());

app.set('PORT', 4000);

app.listen(app.get('PORT'), ()=>{
    console.log(`Server is running`);
});

app.use('/api', indexRouter);

//Conexion a la bd
db.connect()
.then(()=> {
    console.log("Connected to database");
})
.catch((error) => {
    console.log(error);
})