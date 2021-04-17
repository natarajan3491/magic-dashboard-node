const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
var corsMiddleware = require('./src/middleware/corsMiddleware'); 
const errorMiddleware = require('./src/middleware/errorMiddleware');
const routes = require('./src/routes/routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
 //cors Middlerware
app.use(corsMiddleware);

// MongoDB connection
mongoose.connect(
    "mongodb+srv://nattu:uttan@cluster0.erlbp.mongodb.net/dashboard?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    }
  );
 //api-routes
app.use('/', routes);
// error middleware
app.use(errorMiddleware); 

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`App listening to ${PORT}....`);
  console.log('Press Ctrl+C to quit.');
});
