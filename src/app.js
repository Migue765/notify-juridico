const config = require('./config.js');
const morgan = require('morgan')
const express = require('express')
const cors = require('cors')
const app = express()

console.log(`NODE_ENV=${config.NODE_ENV}`);

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());


//Declaración de rutas
app.use('/api/1.0/', require('./app/routes/index.routes'))

//Abre el puerto para correr servidor
app.listen(config.PORT, function(){
  console.log(`App listening on https://notify.gelb.com.co on port ${config.PORT}`);
})