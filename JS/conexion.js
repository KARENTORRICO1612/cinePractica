const express = require('express');
const path = require("path")

let mysql = require("mysql");

const app = express();

let conexion = mysql.createConnection(
    {
        host:"localhost",
        database:"detallepelicula",
        user:"root",
        password: ""
    });


app.set("view engine", "ejs");

// https://expressjs.com/es/starter/static-files.html 
app.use(express.static(path.join(__dirname, "../CSS")));

    app.use(express.json());
    app.use(express.urlencoded({extended:false}));
    
    app.get("/",function(req,res){
        res.render("plantillaPelicula");
    });
    
    
    app.post("/validar", function(req, res){
        const datos = req.body;
    
        // console.log(datos);
    
        let id = datos.cod;
        let titulo = datos.title;
        let duracion = datos.duracion;
        let lenguaje = datos.lenguaje;
        let genero = datos.genero;
        let restriccion = datos.restriccion;
        let sinopsis = datos.sinopsis;
        let actores = datos.actores;
        let director = datos.actores;
        let fechaLanzamiento = datos.fechaL;
        let horarioDisponible = datos.hora;
        let extra = datos.extra;
    
        let buscar = "SELECT * FROM tabla_pelicula WHERE id = "+id+" ";
    
        conexion.query(buscar, function(error, row){
            if(error){
                throw error;
            }else{
                if(row.length > 0){
                    console.log("No se puede registrar, usuario ya existe");
                }else{
                    let registrar = "INSERT INTO tabla_pelicula (id, titulo, duracion, lenguaje, genero, restriccionEdad, sinopsis, actores, director, fechaLanzamiento, horariosDisponibles, extra)  VALUES ('"+id+"','"+titulo+"','"+duracion+"','"+lenguaje+"','"+genero+"','"+restriccion+"', '"+sinopsis+"', '"+actores+"', '"+director+"', '"+fechaLanzamiento+"', '"+horarioDisponible+"', '"+extra+"')";
    
                    conexion.query(registrar, function(error){
                        if(error){
                            throw error;
                        }else{
                            console.log("Datos almacenados correctamente");
                        }
                    });
                    
                }
            }
        });
    
    
    });
    
    app.listen(3000,function(){
        console.log("Servidor creado por http://localhost:3000");
    });
    
    







// conexion.connect(function(err){
//     if(err){
//         throw err;

//     }else{
//         console.log("conexion exitosa");
//     }
// });