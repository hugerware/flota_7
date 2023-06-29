const usuariosController=require('../controllers').usuarios;
const md_auth=require('../authenticated/authenticated');

module.exports=(app)=>{
    app.post('/api/usuario',md_auth.auth,usuariosController.create);    
    app.put('/api/usuario/:id_usuario',md_auth.auth,usuariosController.update);        
    app.get('/api/usuarios',md_auth.auth,usuariosController.getAll);    
    app.get('/api/usuario/:id_usuario',md_auth.auth,usuariosController.getOne);    
    app.delete('/api/usuario/:id_usuario',md_auth.auth,usuariosController.destroy);    
    app.post('/api/login',usuariosController.login);    
}