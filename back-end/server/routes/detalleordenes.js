const detalleordenesController=require('../controllers').detalleordenes;
const md_auth=require('../authenticated/authenticated');

module.exports=(app)=>{
    app.post('/api/detalleorden',md_auth.auth,detalleordenesController.create);    
    app.put('/api/detalleorden/:id_detalleorden',md_auth.auth,detalleordenesController.update);        
    app.get('/api/detalleordenes',md_auth.auth,detalleordenesController.getAll);    
    app.get('/api/detalleorden/:id_detalleorden',md_auth.auth,detalleordenesController.getOne);    
    app.delete('/api/detalleorden/:id_detalleorden',md_auth.auth,detalleordenesController.destroy);    
}