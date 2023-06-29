const parroquias=require('../models').parroquias;

function create (req,res){
    parroquias.create(req.body)
    .then(parroquia=>{
        res.status(200).send({parroquia});
    })
    .catch(err=>{
        res.status(500).send({err});
    })
}

function update (req,res){
    var id_parroquia=req.params.id_parroquia;
    var body=req.body;
    parroquias.findByPk(id_parroquia)    
    .then(parroquia=>{
        parroquia.update(body)
        .then(()=>{
            res.status(200).send({parroquia});
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
    var id_parroquia=req.params.id_parroquia;    
    parroquias.findByPk(id_parroquia)    
    .then(parroquia=>{
        res.status(200).send({parroquia});
    })
    .catch(err=>{
        res.status(500).send({message:"No se encontró el Registro."});
    })
}

function getAll(req,res){
    parroquias.findAll({ order:[['nombre_parroquia','ASC']] })
    .then(parroquia=>{
        res.status(200).send({parroquia});
    })
    .catch(err=>{
        res.status(500).send({message:"No se encontró el Registro."})
    })
}

function destroy(req,res){
    var id_parroquia=req.params.id_parroquia;
    parroquias.findByPk(id_parroquia)
    .then(parroquia=>{        
        if(parroquia){            
            parroquia.destroy({ where: {id_parroquia:id_parroquia} });
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