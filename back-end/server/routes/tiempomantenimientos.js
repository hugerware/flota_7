const tiempomantenimientosController=require('../controllers').tiempomantenimientos;
const md_auth=require('../authenticated/authenticated');

module.exports=(app)=>{
    app.post('/api/tiempomantenimiento',md_auth.auth,tiempomantenimientosController.create);    
    app.put('/api/tiempomantenimiento/:id_tiempomantenimiento',md_auth.auth,tiempomantenimientosController.update);        
    app.get('/api/tiempomantenimientos',md_auth.auth,tiempomantenimientosController.getAll);    
    app.get('/api/tiempomantenimiento/:id_tiempomantenimiento',md_auth.auth,tiempomantenimientosController.getOne);    
    app.delete('/api/tiempomantenimiento/:id_tiempomantenimiento',md_auth.auth,tiempomantenimientosController.destroy);    
}