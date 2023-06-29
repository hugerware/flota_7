const kardexvehiculosController=require('../controllers').kardexvehiculos;
const md_auth=require('../authenticated/authenticated');

module.exports=(app)=>{
    app.post('/api/kardexvehiculos',md_auth.auth,kardexvehiculosController.create);    
    app.put('/api/kardexvehiculos/:id_kardexvehiculos',md_auth.auth,kardexvehiculosController.update);        
    app.get('/api/kardexvehiculos',md_auth.auth,kardexvehiculosController.getAll);    
    app.get('/api/kardexvehiculos/:id_kardexvehiculos',md_auth.auth,kardexvehiculosController.getOne);    
    app.delete('/api/kardexvehiculos/:id_kardexvehiculos',md_auth.auth,kardexvehiculosController.destroy);    
}