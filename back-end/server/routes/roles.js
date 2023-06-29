const rolesController=require('../controllers').roles;
const md_auth=require('../authenticated/authenticated');

module.exports=(app)=>{
    app.post('/api/rol',md_auth.auth,rolesController.create);    
    app.put('/api/rol/:id_rol',md_auth.auth,rolesController.update);        
    app.get('/api/roles',md_auth.auth,rolesController.getAll);    
    app.get('/api/rol/:id_rol',md_auth.auth,rolesController.getOne);    
    app.delete('/api/rol/:id_rol',md_auth.auth,rolesController.destroy);    
}