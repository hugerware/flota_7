const kardexproductosController=require('../controllers').kardexproductos;
const md_auth=require('../authenticated/authenticated');

module.exports=(app)=>{
    app.post('/api/kardexproducto',md_auth.auth,kardexproductosController.create);    
    app.put('/api/kardexproducto/:id_kardexproducto',md_auth.auth,kardexproductosController.update);        
    app.get('/api/kardexproductos',md_auth.auth,kardexproductosController.getAll);    
    app.get('/api/kardexproducto/:id_kardexproducto',md_auth.auth,kardexproductosController.getOne);    
    app.delete('/api/kardexproducto/:id_kardexproducto',md_auth.auth,kardexproductosController.destroy);    
}