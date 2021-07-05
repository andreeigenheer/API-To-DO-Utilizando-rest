const express = require('express');
const app = express()
const port = 3000;
const a_fazer = 'a fazer'
const execucao = 'em execução'
const executado = 'executado'
const atrasado = 'atrasado'


app.get('/afazer', function (req, res) {
  res.send(`Rota ativada com GET e recurso ${a_fazer}:
  valores de ${a_fazer} devem ser retornados`)
})
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});


app.get('/em_execucao', function (req, res) {
  res.send(`Rota ativada com GET e recurso ${execucao}:
  valores de ${execucao} devem ser retornados`)
})
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

app.get('/executado', function (req, res) {
  res.send(`Rota ativada com GET e recurso ${executado}:
  valores de ${executado} devem ser retornados`)
})
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});

app.get('/atrasado', function (req, res) {
  res.send(`Rota ativada com GET e recurso ${atrasado}:
  valores de ${atrasado} devem ser retornados`)
})
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});