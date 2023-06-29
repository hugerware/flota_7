const provinciasController=require('../controllers').provincias;
const md_auth=require('../authenticated/authenticated');

module.exports=(app)=>{
    app.post('/api/provincia',md_auth.auth,provinciasController.create);    
    app.put('/api/provincia/:id_provincia',md_auth.auth,provinciasController.update);        
    app.get('/api/provincias',md_auth.auth,provinciasController.getAll);    
    app.get('/api/provincia/:id_provincia',md_auth.auth,provinciasController.getOne);    
    app.delete('/api/provincia/:id_provincia',md_auth.auth,provinciasController.destroy);    
}