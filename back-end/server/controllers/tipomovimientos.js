const tipomovimientos=require('../models').tipomovimientos;

function create (req,res){
    tipomovimientos.create(req.body)
    .then(tipomovimiento=>{
        res.status(200).send({tipomovimiento});
    })
    .catch(err=>{
        res.status(500).send({err});
    })
}

function update (req,res){
    var id_tipomovimiento=req.params.id_tipomovimiento;
    var body=req.body;
    tipomovimientos.findByPk(id_tipomovimiento)    
    .then(tipomovimiento=>{
        tipomovimiento.update(body)
        .then(()=>{
            res.status(200).send({tipomovimiento});
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
    var id_tipomovimiento=req.params.id_tipomovimiento;    
    tipomovimientos.findByPk(id_tipomovimiento)    
    .then(tipomovimiento=>{
        res.status(200).send({tipomovimiento});
    })
    .catch(err=>{
        res.status(500).send({message:"No se encontró el Registro."});
    })
}

function getAll(req,res){
    tipomovimientos.findAll({ order:[['nombre_tipomovimiento','ASC']] })
    .then(tipomovimiento=>{
        res.status(200).send({tipomovimiento});
    })
    .catch(err=>{
        res.status(500).send({message:"No se encontró el Registro."})
    })
}

function destroy(req,res){
    var id_tipomovimiento=req.params.id_tipomovimiento;
    tipomovimientos.findByPk(id_tipomovimiento)
    .then(tipomovimiento=>{        
        if(tipomovimiento){            
            tipomovimiento.destroy({ where: {id_tipomovimiento:id_tipomovimiento} });
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