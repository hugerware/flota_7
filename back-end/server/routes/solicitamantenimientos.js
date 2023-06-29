const solicitamantenimientosController=require('../controllers').solicitamantenimientos;
const md_auth=require('../authenticated/authenticated');

module.exports=(app)=>{
    app.post('/api/solicitamantenimiento',md_auth.auth,solicitamantenimientosController.create);    
    app.put('/api/solicitamantenimiento/:id_solicitamantenimiento',md_auth.auth,solicitamantenimientosController.update);        
    app.get('/api/solicitamantenimientos',md_auth.auth,solicitamantenimientosController.getAll);    
    app.get('/api/solicitamantenimiento/:id_solicitamantenimiento',md_auth.auth,solicitamantenimientosController.getOne);    
    app.delete('/api/solicitamantenimiento/:id_solicitamantenimiento',md_auth.auth,solicitamantenimientosController.destroy);    
}