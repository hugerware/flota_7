const kardexvehiculos=require('../models').kardexvehiculos;

function create (req,res){
    kardexvehiculos.create(req.body)
    .then(kardexvehiculo=>{
        res.status(200).send({kardexvehiculo});
    })
    .catch(err=>{
        res.status(500).send({err});
    })
}

function update (req,res){
    var id_kardexvehiculo=req.params.id_kardexvehiculo;
    var body=req.body;
    kardexvehiculos.findByPk(id_kardexvehiculo)    
    .then(kardexvehiculo=>{
        kardexvehiculo.update(body)
        .then(()=>{
            res.status(200).send({kardexvehiculo});
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
    var id_kardexvehiculo=req.params.id_kardexvehiculo;    
    kardexvehiculos.findByPk(id_kardexvehiculo)    
    .then(kardexvehiculo=>{
        res.status(200).send({kardexvehiculo});
    })
    .catch(err=>{
        res.status(500).send({message:"No se encontró el Registro."});
    })
}

function getAll(req,res){
    kardexvehiculos.findAll({ order:[['id_kardexvehiculo','ASC']] })
    .then(kardexvehiculo=>{
        res.status(200).send({kardexvehiculo});
    })
    .catch(err=>{
        res.status(500).send({message:"No se encontró el Registro."})
    })
}

function destroy(req,res){
    var id_kardexvehiculo=req.params.id_kardexvehiculo;
    kardexvehiculos.findByPk(id_kardexvehiculo)
    .then(kardexvehiculo=>{        
        if(kardexvehiculo){            
            kardexvehiculo.destroy({ where: {id_kardexvehiculo:id_kardexvehiculo} });
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