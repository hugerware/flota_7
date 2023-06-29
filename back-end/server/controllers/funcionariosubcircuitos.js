const funcionariosubcircuitos=require('../models').funcionariosubcircuitos;

function create (req,res){
    funcionariosubcircuitos.create(req.body)
    .then(funcionariosubcircuito=>{
        res.status(200).send({funcionariosubcircuito});
    })
    .catch(err=>{
        res.status(500).send({err});
    })
}

function update (req,res){
    var id_funcionariosubcircuito=req.params.id_funcionariosubcircuito;
    var body=req.body;
    funcionariosubcircuitos.findByPk(id_funcionariosubcircuito)    
    .then(funcionariosubcircuito=>{
        funcionariosubcircuito.update(body)
        .then(()=>{
            res.status(200).send({funcionariosubcircuito});
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
    var id_funcionariosubcircuito=req.params.id_funcionariosubcircuito;    
    funcionariosubcircuitos.findByPk(id_funcionariosubcircuito)    
    .then(funcionariosubcircuito=>{
        res.status(200).send({funcionariosubcircuito});
    })
    .catch(err=>{
        res.status(500).send({message:"No se encontró el Registro."});
    })
}

function getAll(req,res){
    funcionariosubcircuitos.findAll({ order:[['fecha_funcionariosubcircuito','ASC']] })
    .then(funcionariosubcircuito=>{
        res.status(200).send({funcionariosubcircuito});
    })
    .catch(err=>{
        res.status(500).send({message:"No se encontró el Registro."})
    })
}

function destroy(req,res){
    var id_funcionariosubcircuito=req.params.id_funcionariosubcircuito;
    funcionariosubcircuitos.findByPk(id_funcionariosubcircuito)
    .then(funcionariosubcircuito=>{        
        if(funcionariosubcircuito){            
            funcionariosubcircuito.destroy({ where: {id_funcionariosubcircuito:id_funcionariosubcircuito} });
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