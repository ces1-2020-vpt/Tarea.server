const express = require ("express");
const app = express();

app.get("/",function(req,rest){
  rest.send("Mi servidor de numeros pares")
})

app.get("/parimpar/:numero",function(req,rest){
  let numero = req.params.numero

  if ( numero %2 ==0)
  rest.send ("el numero es par")
  else 
  rest.send("el numero es impar")

  

  
})


app.listen(8080,function(){
  console.log("servidor escuchando en el puerto 8080")
})