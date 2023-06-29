const provincias=require('../models').provincias;

function create (req,res){
    provincias.create(req.body)
    .then(provincia=>{
        res.status(200).send({provincia});
    })
    .catch(err=>{
        res.status(500).send({err});
    })
}

function update (req,res){
    var id_provincia=req.params.id_provincia;
    var body=req.body;
    provincias.findByPk(id_provincia)    
    .then(provincia=>{
        provincia.update(body)
        .then(()=>{
            res.status(200).send({provincia});
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
    var id_provincia=req.params.id_provincia;    
    provincias.findByPk(id_provincia)    
    .then(provincia=>{
        res.status(200).send({provincia});
    })
    .catch(err=>{
        res.status(500).send({message:"No se encontró el Registro."});
    })
}

function getAll(req,res){
    provincias.findAll({ order:[['nombre_provincia','ASC']] })
    .then(provincia=>{
        res.status(200).send({provincia});
    })
    .catch(err=>{
        res.status(500).send({message:"No se encontró el Registro."})
    })
}

function destroy(req,res){
    var id_provincia=req.params.id_provincia;
    provincias.findByPk(id_provincia)
    .then(provincia=>{        
        if(provincia){            
            provincia.destroy({ where: {id_provincia:id_provincia} });
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