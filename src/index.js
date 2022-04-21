const express = require ('express');
const morgan = require ('morgan');

//Init

const app = express();

//setings 

app.set('port', process.env.PORT || 4000);

// Middlewares 

app.use(morgan('dev'));

//Global 


// Routes 
app.get('/views/log.html');


//Public



//Startin server

app.listen(app.get('port'),()=>{
    console.log("server on port", app.get('port'));
});
