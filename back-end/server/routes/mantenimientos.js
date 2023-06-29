const mantenimientosController=require('../controllers').mantenimientos;
const md_auth=require('../authenticated/authenticated');

module.exports=(app)=>{
    app.post('/api/mantenimiento',md_auth.auth,mantenimientosController.create);    
    app.put('/api/mantenimiento/:id_mantenimiento',md_auth.auth,mantenimientosController.update);        
    app.get('/api/mantenimientos',md_auth.auth,mantenimientosController.getAll);    
    app.get('/api/mantenimiento/:id_mantenimiento',md_auth.auth,mantenimientosController.getOne);    
    app.delete('/api/mantenimiento/:id_mantenimiento',md_auth.auth,mantenimientosController.destroy);    
}