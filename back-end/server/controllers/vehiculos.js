const vehiculos=require('../models').vehiculos;
const tipovehiculos=require('../models').tipovehiculos;

function create (req,res){
    console.log(req.body);
    vehiculos.create(req.body)
    .then(vehiculo=>{
        res.status(200).send({vehiculo});
    })
    .catch(err=>{
        res.status(500).send({err});
        console.log(err);
    })
}

function update (req,res){
    var id_vehiculo=req.params.id_vehiculo;
    var body=req.body;
    vehiculos.findByPk(id_vehiculo)    
    .then(vehiculo=>{
        vehiculo.update(body)
        .then(()=>{
            res.status(200).send({vehiculo});
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
    var id_vehiculo=req.params.id_vehiculo;
    vehiculos.findOne({
        where: { id_vehiculo: id_vehiculo },
        include: [
            {
                model: tipovehiculos
            }
        ]        
    })
    .then(vehiculo=>{
        res.status(200).send({vehiculo});
    })
    .catch(err=>{
        res.status(500).send({message:"No se encontró el Registro."});
    })
}

function getAll(req,res){    
    vehiculos.findAll({ 
        order:[['placa_vehiculo','ASC']],
        include: [
            {
                model: tipovehiculos
            }
        ]        
    })
    .then(vehiculo=>{
        res.status(200).send({vehiculo});
    })
    .catch(err=>{
        res.status(500).send({message:"No se encontró el Registro."})
    })
}

function destroy(req,res){
    var id_vehiculo=req.params.id_vehiculo;
    vehiculos.findByPk(id_vehiculo)
    .then(vehiculo=>{        
        if(vehiculo){            
            vehiculo.destroy({ where: {id_vehiculo:id_vehiculo} });
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