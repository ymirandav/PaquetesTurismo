var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//Aquí utilizamos el json con el express
app.use(express.json())

const { guardarCurso } = require('./guardarEndpoint');

var lista_cursos = [];

app.post('/crear_curso', function (req, res) {
console.log(req.body);
    var nuevo_curso = {
         Codigo:req.body.codigo,
         Nombre: req.body.nombre,
         Lista_Docentes:req.body.lista_docentes,
         Lista_Cursos_Pre:req.body.lista_cursos_pre,        
         Creditos:req.body.creditos,
         Horas_Teoria:req.body.horas_teoria,
         Horas_Laboratorio:req.body.horas_laboratorio
    };
    lista_cursos.push(nuevo_curso);
 
    res.end(JSON.stringify(nuevo_curso));
    guardarCurso(lista_cursos);
 })

 app.get('/consultar_cursos', function (req, res) {

    // var nuevo_curso = {
    //      Codigo:req.body.codigo,
    //      Nombre: req.body.nombre,
    //      Lista_Docentes:req.body.lista_docentes,
    //      Lista_Cursos_Pre:req.body.lista_cursos_pre,        
    //      Creditos:req.body.creditos,
    //      Horas_Teoria:req.body.horas_teoria,
    //      Horas_Laboratorio:req.body.horas_laboratorio
    // };

    console.log(lista_cursos);
    res.end(JSON.stringify(lista_cursos));
    // guardarCurso(lista_cursos);
 })

 app.get('/consultar_curso/:codigo', function (req, res) {

    var codigo = req.params.codigo;
    var curso = lista_cursos.find( curso => curso.Codigo == codigo );
    console.log(curso);
    res.end(JSON.stringify(curso));
 })

 app.patch('/actualizar_curso/:codigo', function (req, res) {
   
      var codigo = req.params.codigo;
      var curso = lista_cursos.find( curso => curso.Codigo == codigo );
      curso.Nombre = req.body.nombre;
      curso.Lista_Docentes = req.body.lista_docentes;
      curso.Lista_Cursos_Pre = req.body.lista_cursos_pre;
      curso.Creditos = req.body.creditos;
      curso.Horas_Teoria = req.body.horas_teoria;
      curso.Horas_Laboratorio = req.body.horas_laboratorio;
      console.log(curso);
      res.end(JSON.stringify(curso));
 })
 app.delete('/eliminar_curso/:codigo', function (req, res) {
    
      var codigo = req.params.codigo;
      var curso = lista_cursos.find( curso => curso.Codigo == codigo );
      var index = lista_cursos.indexOf(curso);
      lista_cursos.splice(index, 1);
      console.log(curso);
      res.end(JSON.stringify(curso));
 })

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    
    console.log("Example app listening at http://%s:%s", host, port)
 })