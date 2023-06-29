const unidadmedidas=require('../models').unidadmedidas;

function create (req,res){
    unidadmedidas.create(req.body)
    .then(unidadmedida=>{
        res.status(200).send({unidadmedida});
    })
    .catch(err=>{
        res.status(500).send({err});
    })
}

function update (req,res){
    var id_unidadmedida=req.params.id_unidadmedida;
    var body=req.body;
    unidadmedidas.findByPk(id_unidadmedida)    
    .then(unidadmedida=>{
        unidadmedida.update(body)
        .then(()=>{
            res.status(200).send({unidadmedida});
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
    var id_unidadmedida=req.params.id_unidadmedida;    
    unidadmedidas.findByPk(id_unidadmedida)    
    .then(unidadmedida=>{
        res.status(200).send({unidadmedida});
    })
    .catch(err=>{
        res.status(500).send({message:"No se encontró el Registro."});
    })
}

function getAll(req,res){
    unidadmedidas.findAll({ order:[['nombre_unidadmedida','ASC']] })
    .then(unidadmedida=>{
        res.status(200).send({unidadmedida});
    })
    .catch(err=>{
        res.status(500).send({message:"No se encontró el Registro."})
    })
}

function destroy(req,res){
    var id_unidadmedida=req.params.id_unidadmedida;
    unidadmedidas.findByPk(id_unidadmedida)
    .then(unidadmedida=>{        
        if(unidadmedida){            
            unidadmedida.destroy({ where: {id_unidadmedida:id_unidadmedida} });
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