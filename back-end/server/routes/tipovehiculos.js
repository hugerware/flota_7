const tipovehiculosController=require('../controllers').tipovehiculos;
const md_auth=require('../authenticated/authenticated');

module.exports=(app)=>{
    app.post('/api/tipovehiculo',md_auth.auth,tipovehiculosController.create);    
    app.put('/api/tipovehiculo/:id_tipovehiculo',md_auth.auth,tipovehiculosController.update);        
    app.get('/api/tipovehiculos',md_auth.auth,tipovehiculosController.getAll);    
    app.get('/api/tipovehiculo/:id_tipovehiculo',md_auth.auth,tipovehiculosController.getOne);    
    app.delete('/api/tipovehiculo/:id_tipovehiculo',md_auth.auth,tipovehiculosController.destroy);    
}