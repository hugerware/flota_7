const unidadmedidasController=require('../controllers').unidadmedidas;
const md_auth=require('../authenticated/authenticated');

module.exports=(app)=>{
    app.post('/api/unidadmedida',md_auth.auth,unidadmedidasController.create);    
    app.put('/api/unidadmedida/:id_unidadmedida',md_auth.auth,unidadmedidasController.update);        
    app.get('/api/unidadmedidas',md_auth.auth,unidadmedidasController.getAll);    
    app.get('/api/unidadmedida/:id_unidadmedida',md_auth.auth,unidadmedidasController.getOne);    
    app.delete('/api/unidadmedida/:id_unidadmedida',md_auth.auth,unidadmedidasController.destroy);    
}