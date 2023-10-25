// const express 		      = require('express'),
//       logger 		      = require('morgan'),
//       bodyParser 	      = require('body-parser'),
//       app 		          = express();

// //inicializa o banco de dados
// require('./src/models');

// //Handler http request data
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.use(express.static('public'));

// var indexRoutes = require('./src/routes/index.router');
// app.use('/',indexRoutes);

// app.use(logger('dev'));


// module.exports = app;

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const app = express();

require('./src/models');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

const eventoRoutes = require('./src/routes/evento.router');

app.use('/eventos', eventoRoutes);

var indexRoutes = require('./src/routes/index.router');
app.use('/', indexRoutes);

app.use(logger('dev'));

const PORT = 3000;
app.listen(PORT, () => {
    console.log("Server is running on port ${PORT}");
});

module.exports = app;