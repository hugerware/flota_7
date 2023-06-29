const http = require('http');
const app=require('../app');
const { sequelize } = require('../server/models');
const port=parseInt(process.env.port,10) || 8000;
app.set('port',port);
http.createServer(app).listen(port);

// async function main(){
  
//   try{
//     sequelize.sync({ force: true }).then(() => {
//       console.log('Sincronización Exitosa!');
//     }).catch((error) => {
//       console.error('Error en Sincronización : ', error);
//     });
//   } catch(error){
//     console.error("Error de conexion a la Base de Datos: ", error)

//   }
// }
// main();


