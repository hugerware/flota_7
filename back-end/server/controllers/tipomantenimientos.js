const tipomantenimientos=require('../models').tipomantenimientos;

function create (req,res){
    tipomantenimientos.create(req.body)
    .then(tipomantenimiento=>{
        res.status(200).send({tipomantenimiento});
    })
    .catch(err=>{
        res.status(500).send({err});
    })
}

function update (req,res){
    var id_tipomantenimiento=req.params.id_tipomantenimiento;
    var body=req.body;
    tipomantenimientos.findByPk(id_tipomantenimiento)    
    .then(tipomantenimiento=>{
        tipomantenimiento.update(body)
        .then(()=>{
            res.status(200).send({tipomantenimiento});
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
    var id_tipomantenimiento=req.params.id_tipomantenimiento;    
    tipomantenimientos.findByPk(id_tipomantenimiento)    
    .then(tipomantenimiento=>{
        res.status(200).send({tipomantenimiento});
    })
    .catch(err=>{
        res.status(500).send({message:"No se encontró el Registro."});
    })
}

function getAll(req,res){
    tipomantenimientos.findAll({ order:[['nombre_tipomantenimiento','ASC']] })
    .then(tipomantenimiento=>{
        res.status(200).send({tipomantenimiento});
    })
    .catch(err=>{
        res.status(500).send({message:"No se encontró el Registro."})
    })
}

function destroy(req,res){
    var id_tipomantenimiento=req.params.id_tipomantenimiento;
    tipomantenimientos.findByPk(id_tipomantenimiento)
    .then(tipomantenimiento=>{        
        if(tipomantenimiento){            
            tipomantenimiento.destroy({ where: {id_tipomantenimiento:id_tipomantenimiento} });
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