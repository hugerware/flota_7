const subcircuitos=require('../models').subcircuitos;
const circuitos=require('../models').circuitos;

function create (req,res){
    subcircuitos.create(req.body)
    .then(subcircuito=>{
        res.status(200).send({subcircuito});
    })
    .catch(err=>{
        res.status(500).send({err});
    })
}

function update (req,res){
    var id_subcircuito=req.params.id_subcircuito;
    var body=req.body;
    subcircuitos.findByPk(id_subcircuito)    
    .then(subcircuito=>{
        subcircuito.update(body)
        .then(()=>{
            res.status(200).send({subcircuito});
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
    var id_subcircuito=req.params.id_subcircuito;        
    subcircuitos.findOne({
        where: { id_subcircuito: id_subcircuito },
        include: [
            {
                model: circuitos
            }
        ]        
    })            
    .then(subcircuito=>{
        res.status(200).send({subcircuito});
    })
    .catch(err=>{
        res.status(500).send({message:"No se encontró el Registro."});
    })
}

function getAll(req,res){    
    subcircuitos.findAll({ 
        order:[['nombre_subcircuito','ASC']],
        include: [
            {
                model: circuitos
            }
        ]        
    })
    .then(subcircuito=>{
        res.status(200).send({subcircuito});
    })
    .catch(err=>{
        res.status(500).send({message:"No se encontró el Registro."})
    })
}

function destroy(req,res){
    var id_subcircuito=req.params.id_subcircuito;
    subcircuitos.findByPk(id_subcircuito)
    .then(subcircuito=>{        
        if(subcircuito){            
            subcircuito.destroy({ where: {id_subcircuito:id_subcircuito} });
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