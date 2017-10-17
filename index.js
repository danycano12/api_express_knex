var express = require('express')
var app = express()

var knex = require('knex')({
    client: 'sqlite3',
    connection: {
      filename: "./ejemplo.db"
    }
});

app.get("/users", function(pet, resp){
    listarUsuarios(function(datos){
        resp.send(datos)
    })

})

//separar código de BD
function listarUsuarios(callback) {
    knex.select().from('Usuarios')
    .then(function(datos){
      callback(datos)
    })
}

app.listen(3000, function(){
    console.log("Servidor en marcha!!")
})