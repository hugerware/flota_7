const detalleordenes=require('../models').detalleordenes;

function create (req,res){
    detalleordenes.create(req.body)
    .then(detalleorden=>{
        res.status(200).send({detalleorden});
    })
    .catch(err=>{
        res.status(500).send({err});
    })
}

function update (req,res){
    var id_detalleorden=req.params.id_detalleorden;
    var body=req.body;
    detalleordenes.findByPk(id_detalleorden)    
    .then(detalleorden=>{
        detalleorden.update(body)
        .then(()=>{
            res.status(200).send({detalleorden});
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
    var id_detalleorden=req.params.id_detalleorden;    
    detalleordenes.findByPk(id_detalleorden)    
    .then(detalleorden=>{
        res.status(200).send({detalleorden});
    })
    .catch(err=>{
        res.status(500).send({message:"No se encontró el Registro."});
    })
}

function getAll(req,res){
    detalleordenes.findAll({ order:[['id_mantenimiento','ASC']] })
    .then(detalleorden=>{
        res.status(200).send({detalleorden});
    })
    .catch(err=>{
        res.status(500).send({message:"No se encontró el Registro."})
    })
}

function destroy(req,res){
    var id_detalleorden=req.params.id_detalleorden;
    detalleordenes.findByPk(id_detalleorden)
    .then(detalleorden=>{        
        if(detalleorden){            
            detalleorden.destroy({ where: {id_detalleorden:id_detalleorden} });
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