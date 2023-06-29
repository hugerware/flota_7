const subcircuitosController=require('../controllers').subcircuitos;
const md_auth=require('../authenticated/authenticated');

module.exports=(app)=>{
    app.post('/api/subcircuito',md_auth.auth,subcircuitosController.create);    
    app.put('/api/subcircuito/:id_subcircuito',md_auth.auth,subcircuitosController.update);        
    app.get('/api/subcircuitos',md_auth.auth,subcircuitosController.getAll);    
    app.get('/api/subcircuito/:id_subcircuito',md_auth.auth,subcircuitosController.getOne);    
    app.delete('/api/subcircuito/:id_subcircuito',md_auth.auth,subcircuitosController.destroy);    
}