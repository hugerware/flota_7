const distritos=require('../models').distritos;
const provincias=require('../models').provincias;


function create (req,res){
    distritos.create(req.body)
    .then(distrito=>{
        res.status(200).send({distrito});
    })
    .catch(err=>{
        res.status(500).send({err});
    })
}

function update (req,res){
    var id_distrito=req.params.id_distrito;
    var body=req.body;
    distritos.findByPk(id_distrito)    
    .then(distrito=>{
        distrito.update(body)
        .then(()=>{
            res.status(200).send({distrito});
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
    var id_distrito=req.params.id_distrito;    
    distritos.findOne({
        where: { id_distrito: id_distrito },
        include: [
            {
                model: provincias
            }
        ]        
    })    
    .then(distrito=>{
        res.status(200).send({distrito});
    })
    .catch(err=>{
        res.status(500).send({message:"No se encontró el Registro."});
    })
}

function getAll(req,res){
    distritos.findAll({ 
        order:[['nombre_distrito','ASC']],
        include: [
            {
                model: provincias
            }
        ]        
    })
    .then(distrito=>{
        res.status(200).send({distrito});
    })
    .catch(err=>{
        res.status(500).send({message:"No se encontró el Registro."})
    })
}

function destroy(req,res){
    var id_distrito=req.params.id_distrito;
    distritos.findByPk(id_distrito)
    .then(distrito=>{        
        if(distrito){            
            distrito.destroy({ where: {id_distrito:id_distrito} });
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