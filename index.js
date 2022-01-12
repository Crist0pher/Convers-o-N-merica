var express = require('express');
var app = express();
var valido = require("./controllers/numeroValido")
var negativo = require("./controllers/Negativo")
var conversao = require("./controllers/conversao")


app.get('/:numeros', function(req, res) {
  
  var numeros = req.params.numeros.split("");
  var montagem = {};  



 if(numeros[0] == "-"){montagem.extenso = "menos"}


montagem.extenso = conversao(numeros)

  res.send(montagem);
});

app.listen(3000, function() {
  console.log('App de Exemplo escutando na porta 3000!'  );
});
