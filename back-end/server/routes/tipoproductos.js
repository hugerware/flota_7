const tipoproductosController=require('../controllers').tipoproductos;
const md_auth=require('../authenticated/authenticated');

module.exports=(app)=>{
    app.post('/api/tipoproducto',md_auth.auth,tipoproductosController.create);    
    app.put('/api/tipoproducto/:id_tipoproducto',md_auth.auth,tipoproductosController.update);        
    app.get('/api/tipoproductos',md_auth.auth,tipoproductosController.getAll);    
    app.get('/api/tipoproducto/:id_tipoproducto',md_auth.auth,tipoproductosController.getOne);    
    app.delete('/api/tipoproducto/:id_tipoproducto',md_auth.auth,tipoproductosController.destroy);    
}