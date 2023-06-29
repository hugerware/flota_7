const tipovehiculos=require('../models').tipovehiculos;

function create (req,res){
    tipovehiculos.create(req.body)
    .then(tipovehiculo=>{
        res.status(200).send({tipovehiculo});
    })
    .catch(err=>{
        res.status(500).send({err});
    })
}

function update (req,res){
    var id_tipovehiculo=req.params.id_tipovehiculo;
    var body=req.body;
    tipovehiculos.findByPk(id_tipovehiculo)    
    .then(tipovehiculo=>{
        tipovehiculo.update(body)
        .then(()=>{
            res.status(200).send({tipovehiculo});
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
    var id_tipovehiculo=req.params.id_tipovehiculo;    
    tipovehiculos.findByPk(id_tipovehiculo)    
    .then(tipovehiculo=>{
        res.status(200).send({tipovehiculo});
    })
    .catch(err=>{
        res.status(500).send({message:"No se encontró el Registro."});
    })
}

function getAll(req,res){
    tipovehiculos.findAll({ order:[['nombre_tipovehiculo','ASC']] })
    .then(tipovehiculo=>{
        res.status(200).send({tipovehiculo});
    })
    .catch(err=>{
        res.status(500).send({message:"No se encontró el Registro."})
    })
}

function destroy(req,res){
    var id_tipovehiculo=req.params.id_tipovehiculo;
    tipovehiculos.findByPk(id_tipovehiculo)
    .then(tipovehiculo=>{        
        if(tipovehiculo){            
            tipovehiculo.destroy({ where: {id_tipovehiculo:id_tipovehiculo} });
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