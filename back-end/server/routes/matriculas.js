const matriculasController=require('../controllers').matriculas;
const md_auth=require('../authenticated/authenticated');

module.exports=(app)=>{
    app.post('/api/matricula',md_auth.auth,matriculasController.create);    
    app.put('/api/matricula/:id_matricula',md_auth.auth,matriculasController.update);        
    app.get('/api/matriculas',md_auth.auth,matriculasController.getAll);    
    app.get('/api/matricula/:id_matricula',md_auth.auth,matriculasController.getOne);    
    app.delete('/api/matricula/:id_matricula',md_auth.auth,matriculasController.destroy);    
}