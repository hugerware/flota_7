const vehiculosubcircuitosController=require('../controllers').vehiculosubcircuitos;
const md_auth=require('../authenticated/authenticated');

module.exports=(app)=>{
    app.post('/api/vehiculosubcircuito',md_auth.auth,vehiculosubcircuitosController.create);    
    app.put('/api/vehiculosubcircuito/:id_vehiculosubcircuito',md_auth.auth,vehiculosubcircuitosController.update);        
    app.get('/api/vehiculosubcircuitos',md_auth.auth,vehiculosubcircuitosController.getAll);    
    app.get('/api/vehiculosubcircuito/:id_vehiculosubcircuito',md_auth.auth,vehiculosubcircuitosController.getOne);    
    app.delete('/api/vehiculosubcircuito/:id_vehiculosubcircuito',md_auth.auth,vehiculosubcircuitosController.destroy);    
}