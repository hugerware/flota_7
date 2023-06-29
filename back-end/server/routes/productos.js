const productosController=require('../controllers').productos;
const md_auth=require('../authenticated/authenticated');

module.exports=(app)=>{
    app.post('/api/producto',md_auth.auth,productosController.create);    
    app.put('/api/producto/:id_producto',md_auth.auth,productosController.update);        
    app.get('/api/productos',md_auth.auth,productosController.getAll);    
    app.get('/api/producto/:id_producto',md_auth.auth,productosController.getOne);    
    app.delete('/api/producto/:id_producto',md_auth.auth,productosController.destroy);    
}