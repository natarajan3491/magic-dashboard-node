const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
var corsMiddleware = require('./src/middleware/corsMiddleware');
const errorMiddleware = require('./src/middleware/errorMiddleware'); //error Middlerware
const routes = require('./src/routes/routes'); //api-routes

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(corsMiddleware);

mongoose.connect(
    "mongodb+srv://nattu:uttan@cluster0.erlbp.mongodb.net/dashboard?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    }
  );

app.use('/', routes);

app.use(errorMiddleware); // error middleware

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`App listening to ${PORT}....`);
  console.log('Press Ctrl+C to quit.');
});
