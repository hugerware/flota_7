const gradosController=require('../controllers').grados;
const md_auth=require('../authenticated/authenticated');

module.exports=(app)=>{
    app.post('/api/grado',md_auth.auth,gradosController.create);    
    app.put('/api/grado/:id_grado',md_auth.auth,gradosController.update);        
    app.get('/api/grados',md_auth.auth,gradosController.getAll);    
    app.get('/api/grado/:id_grado',md_auth.auth,gradosController.getOne);    
    app.delete('/api/grado/:id_grado',md_auth.auth,gradosController.destroy);    
}