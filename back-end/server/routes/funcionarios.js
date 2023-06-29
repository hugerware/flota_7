const funcionariosController=require('../controllers').funcionarios;
const md_auth=require('../authenticated/authenticated');

module.exports=(app)=>{
    app.post('/api/funcionario',md_auth.auth,funcionariosController.create);    
    app.put('/api/funcionario/:id_funcionario',md_auth.auth,funcionariosController.update);        
    app.get('/api/funcionarios',md_auth.auth,funcionariosController.getAll);    
    app.get('/api/funcionario/:id_funcionario',md_auth.auth,funcionariosController.getOne);    
    app.delete('/api/funcionario/:id_funcionario',md_auth.auth,funcionariosController.destroy);    
}