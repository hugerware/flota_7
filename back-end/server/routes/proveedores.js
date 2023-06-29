const proveedoresController=require('../controllers').proveedores;
const md_auth=require('../authenticated/authenticated');

module.exports=(app)=>{
    app.post('/api/proveedor',md_auth.auth,proveedoresController.create);    
    app.put('/api/proveedor/:id_proveedor',md_auth.auth,proveedoresController.update);        
    app.get('/api/proveedores',md_auth.auth,proveedoresController.getAll);    
    app.get('/api/proveedor/:id_proveedor',md_auth.auth,proveedoresController.getOne);    
    app.delete('/api/proveedor/:id_proveedor',md_auth.auth,proveedoresController.destroy);    
}