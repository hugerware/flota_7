const roles=require('../models').roles;

function create (req,res){
    roles.create(req.body)
    .then(rol=>{
        res.status(200).send({rol});
    })
    .catch(err=>{
        res.status(500).send({err});
        console.log(err);
    })
}

function update (req,res){
    var id_rol=req.params.id_rol;
    var body=req.body;
    roles.findByPk(id_rol)    
    .then(rol=>{
        rol.update(body)
        .then(()=>{
            res.status(200).send({rol});
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
    var id_rol=req.params.id_rol;    
    roles.findByPk(id_rol)    
    .then(rol=>{
        res.status(200).send({rol});
    })
    .catch(err=>{
        res.status(500).send({message:"No se encontró el Registro."});
    })
}

function getAll(req,res){
    roles.findAll({ order:[['nombre_rol','ASC']] })
    .then(rol=>{
        res.status(200).send({rol});
    })
    .catch(err=>{
        res.status(500).send({message:"No se encontró el Registro."})
    })
}

function destroy(req,res){
    var id_rol=req.params.id_rol;
    roles.findByPk(id_rol)
    .then(rol=>{        
        if(rol){            
            rol.destroy({ where: {id_rol:id_rol} });
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