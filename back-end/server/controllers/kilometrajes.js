const kilometrajes=require('../models').kilometrajes;

function create (req,res){
    kilometrajes.create(req.body)
    .then(kilometraje=>{
        res.status(200).send({kilometraje});
    })
    .catch(err=>{
        res.status(500).send({err});
    })
}

function update (req,res){
    var id_kilometraje=req.params.id_kilometraje;
    var body=req.body;
    kilometrajes.findByPk(id_kilometraje)    
    .then(kilometraje=>{
        kilometraje.update(body)
        .then(()=>{
            res.status(200).send({kilometraje});
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
    var id_kilometraje=req.params.id_kilometraje;    
    kilometrajes.findByPk(id_kilometraje)    
    .then(kilometraje=>{
        res.status(200).send({kilometraje});
    })
    .catch(err=>{
        res.status(500).send({message:"No se encontró el Registro."});
    })
}

function getAll(req,res){
    kilometrajes.findAll({ order:[['id_kilometraje','ASC']] })
    .then(kilometraje=>{
        res.status(200).send({kilometraje});
    })
    .catch(err=>{
        res.status(500).send({message:"No se encontró el Registro."})
    })
}

function destroy(req,res){
    var id_kilometraje=req.params.id_kilometraje;
    kilometrajes.findByPk(id_kilometraje)
    .then(kilometraje=>{        
        if(kilometraje){            
            kilometraje.destroy({ where: {id_kilometraje:id_kilometraje} });
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