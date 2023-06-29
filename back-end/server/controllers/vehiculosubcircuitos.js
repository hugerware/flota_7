const vehiculosubcircuitos=require('../models').vehiculosubcircuitos;

function create (req,res){
    vehiculosubcircuitos.create(req.body)
    .then(vehiculosubcircuito=>{
        res.status(200).send({vehiculosubcircuito});
    })
    .catch(err=>{
        res.status(500).send({err});
    })
}

function update (req,res){
    var id_vehiculosubcircuito=req.params.id_vehiculosubcircuito;
    var body=req.body;
    vehiculosubcircuitos.findByPk(id_vehiculosubcircuito)    
    .then(vehiculosubcircuito=>{
        vehiculosubcircuito.update(body)
        .then(()=>{
            res.status(200).send({vehiculosubcircuito});
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
    var id_vehiculosubcircuito=req.params.id_vehiculosubcircuito;    
    vehiculosubcircuitos.findByPk(id_vehiculosubcircuito)    
    .then(vehiculosubcircuito=>{
        res.status(200).send({vehiculosubcircuito});
    })
    .catch(err=>{
        res.status(500).send({message:"No se encontró el Registro."});
    })
}

function getAll(req,res){
    vehiculosubcircuitos.findAll({ order:[['fecha_vehiculosubcircuito','ASC']] })
    .then(vehiculosubcircuito=>{
        res.status(200).send({vehiculosubcircuito});
    })
    .catch(err=>{
        res.status(500).send({message:"No se encontró el Registro."})
    })
}

function destroy(req,res){
    var id_vehiculosubcircuito=req.params.id_vehiculosubcircuito;
    vehiculosubcircuitos.findByPk(id_vehiculosubcircuito)
    .then(vehiculosubcircuito=>{        
        if(vehiculosubcircuito){            
            vehiculosubcircuito.destroy({ where: {id_vehiculosubcircuito:id_vehiculosubcircuito} });
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