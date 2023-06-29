const circuitos=require('../models').circuitos;
const distritos=require('../models').distritos;

function create (req,res){
    circuitos.create(req.body)
    .then(circuito=>{
        res.status(200).send({circuito});
    })
    .catch(err=>{
        res.status(500).send({err});
    })
}

function update (req,res){
    var id_circuito=req.params.id_circuito;
    var body=req.body;
    circuitos.findByPk(id_circuito)    
    .then(circuito=>{
        circuito.update(body)
        .then(()=>{
            res.status(200).send({circuito});
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
    var id_circuito=req.params.id_circuito;        
    circuitos.findOne({
        where: { id_circuito: id_circuito },
        include: [
            {
                model: distritos
            }
        ]        
    })        
    .then(circuito=>{
        res.status(200).send({circuito});
    })
    .catch(err=>{
        res.status(500).send({message:"No se encontró el Registro."});
    })
}

function getAll(req,res){    
    circuitos.findAll({ 
        order:[['nombre_circuito','ASC']],
        include: [
            {
                model: distritos
            }
        ]        
    })
    .then(circuito=>{
        res.status(200).send({circuito});
    })
    .catch(err=>{
        res.status(500).send({message:"No se encontró el Registro."})
    })
}

function destroy(req,res){
    var id_circuito=req.params.id_circuito;
    circuitos.findByPk(id_circuito)
    .then(circuito=>{        
        if(circuito){            
            circuito.destroy({ where: {id_circuito:id_circuito} });
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