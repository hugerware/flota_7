const permisos=require('../models').permisos;

function create (req,res){
    permisos.create(req.body)
    .then(permiso=>{
        res.status(200).send({permiso});
    })
    .catch(err=>{
        res.status(500).send({err});
    })
}

function update (req,res){
    var id_permiso=req.params.id_permiso;
    var body=req.body;
    permisos.findByPk(id_permiso)    
    .then(permiso=>{
        permiso.update(body)
        .then(()=>{
            res.status(200).send({permiso});
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
    var id_permiso=req.params.id_permiso;    
    permisos.findByPk(id_permiso)    
    .then(permiso=>{
        res.status(200).send({permiso});
    })
    .catch(err=>{
        res.status(500).send({message:"No se encontró el Registro."});
    })
}

function getAll(req,res){
    permisos.findAll({ order:[['nombre_permiso','ASC']] })
    .then(permiso=>{
        res.status(200).send({permiso});
    })
    .catch(err=>{
        res.status(500).send({message:"No se encontró el Registro."})
    })
}

function destroy(req,res){
    var id_permiso=req.params.id_permiso;
    permisos.findByPk(id_permiso)
    .then(permiso=>{        
        if(permiso){            
            permiso.destroy({ where: {id_permiso:id_permiso} });
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