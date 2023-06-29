const ordenes=require('../models').ordenes;

function create (req,res){
    ordenes.create(req.body)
    .then(orden=>{
        res.status(200).send({orden});
    })
    .catch(err=>{
        res.status(500).send({err});
    })
}

function update (req,res){
    var id_orden=req.params.id_orden;
    var body=req.body;
    ordenes.findByPk(id_orden)    
    .then(orden=>{
        orden.update(body)
        .then(()=>{
            res.status(200).send({orden});
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
    var id_orden=req.params.id_orden;    
    ordenes.findByPk(id_orden)    
    .then(orden=>{
        res.status(200).send({orden});
    })
    .catch(err=>{
        res.status(500).send({message:"No se encontró el Registro."});
    })
}

function getAll(req,res){
    ordenes.findAll({ order:[['id_orden','ASC']] })
    .then(orden=>{
        res.status(200).send({orden});
    })
    .catch(err=>{
        res.status(500).send({message:"No se encontró el Registro."})
    })
}

function destroy(req,res){
    var id_orden=req.params.id_orden;
    ordenes.findByPk(id_orden)
    .then(orden=>{        
        if(orden){            
            orden.destroy({ where: {id_orden:id_orden} });
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