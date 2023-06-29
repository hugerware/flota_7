const express=require('express');
const bodyParser=require('body-parser');
//const fileUpload = require('express-fileupload');


const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
//app.use(fileUpload());


//cabeceras
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin', '*' );
    res.header('Access-Control-Allow-Headers','Authorization, X-API-KEY, Origin, X-Requeted-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//Rutas
require('./server/routes/circuitos')(app);
require('./server/routes/detalleordenes')(app);
require('./server/routes/distritos')(app);
require('./server/routes/funcionarios')(app);
require('./server/routes/funcionariosubcircuitos')(app);
require('./server/routes/grados')(app);
require('./server/routes/kardexproductos')(app);
require('./server/routes/kardexvehiculos')(app);
require('./server/routes/kilometrajes')(app);
require('./server/routes/mantenimientos')(app);
require('./server/routes/matriculas')(app);
require('./server/routes/modulos')(app);

require('./server/routes/ordenes')(app);
require('./server/routes/parroquias')(app);
require('./server/routes/permisos')(app);
require('./server/routes/productos')(app);
require('./server/routes/proveedores')(app);
require('./server/routes/provincias')(app);
require('./server/routes/roles')(app);
require('./server/routes/solicitamantenimientos')(app);
require('./server/routes/solicitasignaciones')(app);
require('./server/routes/subcircuitos')(app);
require('./server/routes/tiempomantenimientos')(app);
require('./server/routes/tipomovimientos')(app);
require('./server/routes/tipoproductos')(app);
require('./server/routes/tipovehiculos')(app);
require('./server/routes/tipomantenimientos')(app);
require('./server/routes/unidadmedidas')(app);
require('./server/routes/usuarios')(app);


require('./server/routes/vehiculos')(app);
require('./server/routes/vehiculosubcircuitos')(app);








app.get('*',(req,res)=>{
    res.status(200).send({message:"Servidor Flota7"})
})

module.exports=app;