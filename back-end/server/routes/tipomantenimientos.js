const tipomantenimientosController=require('../controllers').tipomantenimientos;
const md_auth=require('../authenticated/authenticated');

module.exports=(app)=>{
    app.post('/api/tipomantenimiento',md_auth.auth,tipomantenimientosController.create);    
    app.put('/api/tipomantenimiento/:id_tipomantenimiento',md_auth.auth,tipomantenimientosController.update);        
    app.get('/api/tipomantenimientos',md_auth.auth,tipomantenimientosController.getAll);    
    app.get('/api/tipomantenimiento/:id_tipomantenimiento',md_auth.auth,tipomantenimientosController.getOne);    
    app.delete('/api/tipomantenimiento/:id_tipomantenimiento',md_auth.auth,tipomantenimientosController.destroy);    
}