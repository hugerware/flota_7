const solicitasignaciones=require('../models').solicitasignaciones;

function create (req,res){
    solicitasignaciones.create(req.body)
    .then(solicitasignacion=>{
        res.status(200).send({solicitasignacion});
    })
    .catch(err=>{
        res.status(500).send({err});
    })
}

function update (req,res){
    var id_solicitasignacion=req.params.id_solicitasignacion;
    var body=req.body;
    solicitasignaciones.findByPk(id_solicitasignacion)    
    .then(solicitasignacion=>{
        solicitasignacion.update(body)
        .then(()=>{
            res.status(200).send({solicitasignacion});
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
    var id_solicitasignacion=req.params.id_solicitasignacion;    
    solicitasignaciones.findByPk(id_solicitasignacion)    
    .then(solicitasignacion=>{
        res.status(200).send({solicitasignacion});
    })
    .catch(err=>{
        res.status(500).send({message:"No se encontró el Registro."});
    })
}

function getAll(req,res){
    solicitasignaciones.findAll({ order:[['id_solicitasignacion','ASC']] })
    .then(solicitasignacion=>{
        res.status(200).send({solicitasignacion});
    })
    .catch(err=>{
        res.status(500).send({message:"No se encontró el Registro."})
    })
}

function destroy(req,res){
    var id_solicitasignacion=req.params.id_solicitasignacion;
    solicitasignaciones.findByPk(id_solicitasignacion)
    .then(solicitasignacion=>{        
        if(solicitasignacion){            
            solicitasignacion.destroy({ where: {id_solicitasignacion:id_solicitasignacion} });
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