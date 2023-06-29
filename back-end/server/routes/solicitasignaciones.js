const solicitasignacionesController=require('../controllers').solicitasignaciones;
const md_auth=require('../authenticated/authenticated');

module.exports=(app)=>{
    app.post('/api/solicitasignacion',md_auth.auth,solicitasignacionesController.create);    
    app.put('/api/solicitasignacion/:id_solicitasignacion',md_auth.auth,solicitasignacionesController.update);        
    app.get('/api/solicitasignaciones',md_auth.auth,solicitasignacionesController.getAll);    
    app.get('/api/solicitasignacion/:id_solicitasignacion',md_auth.auth,solicitasignacionesController.getOne);    
    app.delete('/api/solicitasignacion/:id_solicitasignacion',md_auth.auth,solicitasignacionesController.destroy);    
}