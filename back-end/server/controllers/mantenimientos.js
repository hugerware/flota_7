const mantenimientos=require('../models').mantenimientos;

function create (req,res){
    mantenimientos.create(req.body)
    .then(mantenimiento=>{
        res.status(200).send({mantenimiento});
    })
    .catch(err=>{
        res.status(500).send({err});
    })
}

function update (req,res){
    var id_mantenimiento=req.params.id_mantenimiento;
    var body=req.body;
    mantenimientos.findByPk(id_mantenimiento)    
    .then(mantenimiento=>{
        mantenimiento.update(body)
        .then(()=>{
            res.status(200).send({mantenimiento});
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
    var id_mantenimiento=req.params.id_mantenimiento;    
    mantenimientos.findByPk(id_mantenimiento)    
    .then(mantenimiento=>{
        res.status(200).send({mantenimiento});
    })
    .catch(err=>{
        res.status(500).send({message:"No se encontró el Registro."});
    })
}

function getAll(req,res){
    mantenimientos.findAll({ order:[['id_mantenimiento','ASC']] })
    .then(mantenimiento=>{
        res.status(200).send({mantenimiento});
    })
    .catch(err=>{
        res.status(500).send({message:"No se encontró el Registro."})
    })
}

function destroy(req,res){
    var id_mantenimiento=req.params.id_mantenimiento;
    mantenimientos.findByPk(id_mantenimiento)
    .then(mantenimiento=>{        
        if(mantenimiento){            
            mantenimiento.destroy({ where: {id_mantenimiento:id_mantenimiento} });
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