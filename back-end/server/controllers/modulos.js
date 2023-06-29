const modulos=require('../models').modulos;

function create (req,res){
    modulos.create(req.body)
    .then(modulo=>{
        res.status(200).send({modulo});
    })
    .catch(err=>{
        res.status(500).send({err});
    })
}

function update (req,res){
    var id_modulo=req.params.id_modulo;
    var body=req.body;
    modulos.findByPk(id_modulo)    
    .then(modulo=>{
        modulo.update(body)
        .then(()=>{
            res.status(200).send({modulo});
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
    var id_modulo=req.params.id_modulo;    
    modulos.findByPk(id_modulo)    
    .then(modulo=>{
        res.status(200).send({modulo});
    })
    .catch(err=>{
        res.status(500).send({message:"No se encontró el Registro."});
    })
}

function getAll(req,res){
    modulos.findAll({ order:[['nombre_modulo','ASC']] })
    .then(modulo=>{
        res.status(200).send({modulo});
    })
    .catch(err=>{
        res.status(500).send({message:"No se encontró el Registro."})
    })
}

function destroy(req,res){
    var id_modulo=req.params.id_modulo;
    modulos.findByPk(id_modulo)
    .then(modulo=>{        
        if(modulo){            
            modulo.destroy({ where: {id_modulo:id_modulo} });
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