const tipomovimientosController=require('../controllers').tipomovimientos;
const md_auth=require('../authenticated/authenticated');

module.exports=(app)=>{
    app.post('/api/tipomovimiento',md_auth.auth,tipomovimientosController.create);    
    app.put('/api/tipomovimiento/:id_tipomovimiento',md_auth.auth,tipomovimientosController.update);        
    app.get('/api/tipomovimientos',md_auth.auth,tipomovimientosController.getAll);    
    app.get('/api/tipomovimiento/:id_tipomovimiento',md_auth.auth,tipomovimientosController.getOne);    
    app.delete('/api/tipomovimiento/:id_tipomovimiento',md_auth.auth,tipomovimientosController.destroy);    
}