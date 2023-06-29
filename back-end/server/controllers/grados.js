const grados=require('../models').grados;

function create (req,res){
    grados.create(req.body)
    .then(grado=>{
        res.status(200).send({grado});
    })
    .catch(err=>{
        res.status(500).send({err});
    })
}

function update (req,res){
    var id_grado=req.params.id_grado;
    var body=req.body;
    grados.findByPk(id_grado)    
    .then(grado=>{
        grado.update(body)
        .then(()=>{
            res.status(200).send({grado});
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
    var id_grado=req.params.id_grado;    
    grados.findByPk(id_grado)    
    .then(grado=>{
        res.status(200).send({grado});
    })
    .catch(err=>{
        res.status(500).send({message:"No se encontró el Registro."});
    })
}

function getAll(req,res){
    grados.findAll({ order:[['nombre_grado','ASC']] })
    .then(grado=>{
        res.status(200).send({grado});
    })
    .catch(err=>{
        res.status(500).send({message:"No se encontró el Registro."})
    })
}

function destroy(req,res){
    var id_grado=req.params.id_grado;
    grados.findByPk(id_grado)
    .then(grado=>{        
        if(grado){            
            grado.destroy({ where: {id_grado:id_grado} });
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