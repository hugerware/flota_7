const funcionariosubcircuitosController=require('../controllers').funcionariosubcircuitos;
const md_auth=require('../authenticated/authenticated');

module.exports=(app)=>{
    app.post('/api/funcionariosubcircuito',md_auth.auth,funcionariosubcircuitosController.create);    
    app.put('/api/funcionariosubcircuito/:id_funcionariosubcircuito',md_auth.auth,funcionariosubcircuitosController.update);        
    app.get('/api/funcionariosubcircuitos',md_auth.auth,funcionariosubcircuitosController.getAll);    
    app.get('/api/funcionariosubcircuito/:id_funcionariosubcircuito',md_auth.auth,funcionariosubcircuitosController.getOne);    
    app.delete('/api/funcionariosubcircuito/:id_funcionariosubcircuito',md_auth.auth,funcionariosubcircuitosController.destroy);    
}