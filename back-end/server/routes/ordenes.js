const ordenesController=require('../controllers').ordenes;
const md_auth=require('../authenticated/authenticated');

module.exports=(app)=>{
    app.post('/api/orden',md_auth.auth,ordenesController.create);    
    app.put('/api/orden/:id_orden',md_auth.auth,ordenesController.update);        
    app.get('/api/ordenes',md_auth.auth,ordenesController.getAll);    
    app.get('/api/orden/:id_orden',md_auth.auth,ordenesController.getOne);    
    app.delete('/api/orden/:id_orden',md_auth.auth,ordenesController.destroy);    
}