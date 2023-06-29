const kardexproductos=require('../models').kardexproductos;

function create (req,res){
    kardexproductos.create(req.body)
    .then(kardexproducto=>{
        res.status(200).send({kardexproducto});
    })
    .catch(err=>{
        res.status(500).send({err});
    })
}

function update (req,res){
    var id_kardexproducto=req.params.id_kardexproducto;
    var body=req.body;
    kardexproductos.findByPk(id_kardexproducto)    
    .then(kardexproducto=>{
        kardexproducto.update(body)
        .then(()=>{
            res.status(200).send({kardexproducto});
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
    var id_kardexproducto=req.params.id_kardexproducto;    
    kardexproductos.findByPk(id_kardexproducto)    
    .then(kardexproducto=>{
        res.status(200).send({kardexproducto});
    })
    .catch(err=>{
        res.status(500).send({message:"No se encontró el Registro."});
    })
}

function getAll(req,res){
    kardexproductos.findAll({ order:[['id_tipomovimiento','ASC']] })
    .then(kardexproducto=>{
        res.status(200).send({kardexproducto});
    })
    .catch(err=>{
        res.status(500).send({message:"No se encontró el Registro."})
    })
}

function destroy(req,res){
    var id_kardexproducto=req.params.id_kardexproducto;
    kardexproductos.findByPk(id_kardexproducto)
    .then(kardexproducto=>{        
        if(kardexproducto){            
            kardexproducto.destroy({ where: {id_kardexproducto:id_kardexproducto} });
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