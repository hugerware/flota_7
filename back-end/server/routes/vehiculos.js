const vehiculosController=require('../controllers').vehiculos;
const md_auth=require('../authenticated/authenticated');

module.exports=(app)=>{
    app.post('/api/vehiculo',md_auth.auth,vehiculosController.create);    
    app.put('/api/vehiculo/:id_vehiculo',md_auth.auth,vehiculosController.update);        
    app.get('/api/vehiculos',md_auth.auth,vehiculosController.getAll);    
    app.get('/api/vehiculo/:id_vehiculo',md_auth.auth,vehiculosController.getOne);    
    app.delete('/api/vehiculo/:id_vehiculo',md_auth.auth,vehiculosController.destroy);    
}