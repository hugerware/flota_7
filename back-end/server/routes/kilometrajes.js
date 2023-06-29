const kilometrajesController=require('../controllers').kilometrajes;
const md_auth=require('../authenticated/authenticated');

module.exports=(app)=>{
    app.post('/api/kilometraje',md_auth.auth,kilometrajesController.create);    
    app.put('/api/kilometraje/:id_kilometraje',md_auth.auth,kilometrajesController.update);        
    app.get('/api/kilometrajes',md_auth.auth,kilometrajesController.getAll);    
    app.get('/api/kilometraje/:id_kilometraje',md_auth.auth,kilometrajesController.getOne);    
    app.delete('/api/kilometraje/:id_kilometraje',md_auth.auth,kilometrajesController.destroy);    
}