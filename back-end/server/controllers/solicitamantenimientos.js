const solicitamantenimientos=require('../models').solicitamantenimientos;

function create (req,res){
    solicitamantenimientos.create(req.body)
    .then(solicitamantenimiento=>{
        res.status(200).send({solicitamantenimiento});
    })
    .catch(err=>{
        res.status(500).send({err});
    })
}

function update (req,res){
    var id_solicitamantenimiento=req.params.id_solicitamantenimiento;
    var body=req.body;
    solicitamantenimientos.findByPk(id_solicitamantenimiento)    
    .then(solicitamantenimiento=>{
        solicitamantenimiento.update(body)
        .then(()=>{
            res.status(200).send({solicitamantenimiento});
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
    var id_solicitamantenimiento=req.params.id_solicitamantenimiento;    
    solicitamantenimientos.findByPk(id_solicitamantenimiento)    
    .then(solicitamantenimiento=>{
        res.status(200).send({solicitamantenimiento});
    })
    .catch(err=>{
        res.status(500).send({message:"No se encontró el Registro."});
    })
}

function getAll(req,res){
    solicitamantenimientos.findAll({ order:[['id_solicitamantenimiento','ASC']] })
    .then(solicitamantenimiento=>{
        res.status(200).send({solicitamantenimiento});
    })
    .catch(err=>{
        res.status(500).send({message:"No se encontró el Registro."})
    })
}

function destroy(req,res){
    var id_solicitamantenimiento=req.params.id_solicitamantenimiento;
    solicitamantenimientos.findByPk(id_solicitamantenimiento)
    .then(solicitamantenimiento=>{        
        if(solicitamantenimiento){            
            solicitamantenimiento.destroy({ where: {id_solicitamantenimiento:id_solicitamantenimiento} });
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