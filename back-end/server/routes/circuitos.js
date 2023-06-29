const circuitosController=require('../controllers').circuitos;
const md_auth=require('../authenticated/authenticated');

module.exports=(app)=>{
    app.post('/api/circuito',md_auth.auth,circuitosController.create);    
    app.put('/api/circuito/:id_circuito',md_auth.auth,circuitosController.update);        
    app.get('/api/circuitos',md_auth.auth,circuitosController.getAll);    
    app.get('/api/circuito/:id_circuito',md_auth.auth,circuitosController.getOne);    
    app.delete('/api/circuito/:id_circuito',md_auth.auth,circuitosController.destroy);    
}