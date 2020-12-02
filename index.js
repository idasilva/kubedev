const express = require('express')
const app = express();

app.get('/fahrenheit/:valor/celsius', (req, resp) =>{


    const valor  = req.params.valor;
    const celsius = ( valor - 32) *5/9;
    resp.json({valor:celsius})



});
app.get('/celsius/:valor/fahrenheit', (req, resp) =>{


    const valor  = req.params.valor;
    const fahrenheit = (valor *9 / 5)+ 32;
    resp.json({valor:fahrenheit})

});


app.listen(8080,()=>{
    console.log('Servidor rodando na port 8080.')
});