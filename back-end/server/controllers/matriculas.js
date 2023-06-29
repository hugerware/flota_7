const matriculas=require('../models').matriculas;

function create (req,res){
    matriculas.create(req.body)
    .then(matricula=>{
        res.status(200).send({matricula});
    })
    .catch(err=>{
        res.status(500).send({err});
    })
}

function update (req,res){
    var id_matricula=req.params.id_matricula;
    var body=req.body;
    matriculas.findByPk(id_matricula)    
    .then(matricula=>{
        matricula.update(body)
        .then(()=>{
            res.status(200).send({matricula});
        })
        .catch(err=>{
            res.status(500).send({message:"Registro no actualizado."});    
        })
    })
    .catch(err=>{
        res.status(500).send({message:"Ocurrió un error al buscar el registro."});
    })
}

function getOne (req,res){
    var id_matricula=req.params.id_matricula;    
    matriculas.findByPk(id_matricula)    
    .then(matricula=>{
        res.status(200).send({matricula});
    })
    .catch(err=>{
        res.status(500).send({message:"No se encontró el Registro."});
    })
}

function getAll(req,res){
    matriculas.findAll({ order:[['actual_matricula','ASC']] })
    .then(matricula=>{
        res.status(200).send({matricula});
    })
    .catch(err=>{
        res.status(500).send({message:"No se encontró el Registro."})
    })
}

function destroy(req,res){
    var id_matricula=req.params.id_matricula;
    matriculas.findByPk(id_matricula)
    .then(matricula=>{        
        if(matricula){            
            matricula.destroy({ where: {id_matricula:id_matricula} });
            res.status(200).send({message:"Registro eliminado."});    
        }else{
            res.status(401).send({message:"El registro no existe."});
        }
    })
    .catch(err=>{
        res.status(500).send({message:"Ocurrió un error al buscar el registro."});
    })
}



module.exports={
    create,
    update,
    destroy,
    getAll,
    getOne
}