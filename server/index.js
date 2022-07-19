
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

//now the next step is to create routes for backend app and for that create new folder routes and inside that we put all our routes functions
app.use('/posts', postRoutes);

const CONNECTION_URL = 'mongodb://localhost:27017';

const PORT = process.env.PORT|| 5000;

//it is used to conect for db and it has two parameter first for the url of db connection and other for urlparser and it use promises 
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

//this help us to dont get worning in db
mongoose.set('useFindAndModify', false);