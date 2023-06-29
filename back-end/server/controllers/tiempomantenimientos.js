const tiempomantenimientos=require('../models').tiempomantenimientos;

function create (req,res){
    tiempomantenimientos.create(req.body)
    .then(tiempomantenimiento=>{
        res.status(200).send({tiempomantenimiento});
    })
    .catch(err=>{
        res.status(500).send({err});
    })
}

function update (req,res){
    var id_tiempomantenimiento=req.params.id_tiempomantenimiento;
    var body=req.body;
    tiempomantenimientos.findByPk(id_tiempomantenimiento)    
    .then(tiempomantenimiento=>{
        tiempomantenimiento.update(body)
        .then(()=>{
            res.status(200).send({tiempomantenimiento});
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
    var id_tiempomantenimiento=req.params.id_tiempomantenimiento;    
    tiempomantenimientos.findByPk(id_tiempomantenimiento)    
    .then(tiempomantenimiento=>{
        res.status(200).send({tiempomantenimiento});
    })
    .catch(err=>{
        res.status(500).send({message:"No se encontró el Registro."});
    })
}

function getAll(req,res){
    tiempomantenimientos.findAll({ order:[['nombre_tiempomantenimiento','ASC']] })
    .then(tiempomantenimiento=>{
        res.status(200).send({tiempomantenimiento});
    })
    .catch(err=>{
        res.status(500).send({message:"No se encontró el Registro."})
    })
}

function destroy(req,res){
    var id_tiempomantenimiento=req.params.id_tiempomantenimiento;
    tiempomantenimientos.findByPk(id_tiempomantenimiento)
    .then(tiempomantenimiento=>{        
        if(tiempomantenimiento){            
            tiempomantenimiento.destroy({ where: {id_tiempomantenimiento:id_tiempomantenimiento} });
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