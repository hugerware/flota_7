const distritosController=require('../controllers').distritos;
const md_auth=require('../authenticated/authenticated');

module.exports=(app)=>{
    app.post('/api/distrito',md_auth.auth,distritosController.create);    
    app.put('/api/distrito/:id_distrito',md_auth.auth,distritosController.update);        
    app.get('/api/distritos',md_auth.auth,distritosController.getAll);    
    app.get('/api/distrito/:id_distrito',md_auth.auth,distritosController.getOne);    
    app.delete('/api/distrito/:id_distrito',md_auth.auth,distritosController.destroy);    
}