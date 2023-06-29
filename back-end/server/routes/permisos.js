const permisosController=require('../controllers').permisos;
const md_auth=require('../authenticated/authenticated');

module.exports=(app)=>{
    app.post('/api/permiso',md_auth.auth,permisosController.create);    
    app.put('/api/permiso/:id_permiso',md_auth.auth,permisosController.update);        
    app.get('/api/permisos',md_auth.auth,permisosController.getAll);    
    app.get('/api/permiso/:id_permiso',md_auth.auth,permisosController.getOne);    
    app.delete('/api/permiso/:id_permiso',md_auth.auth,permisosController.destroy);    
}