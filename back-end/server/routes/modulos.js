const modulosController=require('../controllers').modulos;
const md_auth=require('../authenticated/authenticated');

module.exports=(app)=>{
    app.post('/api/modulo',md_auth.auth,modulosController.create);    
    app.put('/api/modulo/:id_modulo',md_auth.auth,modulosController.update);        
    app.get('/api/modulos',md_auth.auth,modulosController.getAll);    
    app.get('/api/modulo/:id_modulo',md_auth.auth,modulosController.getOne);    
    app.delete('/api/modulo/:id_modulo',md_auth.auth,modulosController.destroy);    
}