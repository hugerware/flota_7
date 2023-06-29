const parroquiasController=require('../controllers').parroquias;
const md_auth=require('../authenticated/authenticated');

module.exports=(app)=>{
    app.post('/api/parroquia',md_auth.auth,parroquiasController.create);    
    app.put('/api/parroquia/:id_parroquia',md_auth.auth,parroquiasController.update);        
    app.get('/api/parroquias',md_auth.auth,parroquiasController.getAll);    
    app.get('/api/parroquia/:id_parroquia',md_auth.auth,parroquiasController.getOne);    
    app.delete('/api/parroquia/:id_parroquia',md_auth.auth,parroquiasController.destroy);    
}