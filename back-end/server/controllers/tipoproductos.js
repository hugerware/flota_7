const tipoproductos=require('../models').tipoproductos;

function create (req,res){
    tipoproductos.create(req.body)
    .then(tipoproducto=>{
        res.status(200).send({tipoproducto});
    })
    .catch(err=>{
        res.status(500).send({err});
    })
}

function update (req,res){
    var id_tipoproducto=req.params.id_tipoproducto;
    var body=req.body;
    tipoproductos.findByPk(id_tipoproducto)    
    .then(tipoproducto=>{
        tipoproducto.update(body)
        .then(()=>{
            res.status(200).send({tipoproducto});
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
    var id_tipoproducto=req.params.id_tipoproducto;    
    tipoproductos.findByPk(id_tipoproducto)    
    .then(tipoproducto=>{
        res.status(200).send({tipoproducto});
    })
    .catch(err=>{
        res.status(500).send({message:"No se encontró el Registro."});
    })
}

function getAll(req,res){
    tipoproductos.findAll({ order:[['nombre_tipoproducto','ASC']] })
    .then(tipoproducto=>{
        res.status(200).send({tipoproducto});
    })
    .catch(err=>{
        res.status(500).send({message:"No se encontró el Registro."})
    })
}

function destroy(req,res){
    var id_tipoproducto=req.params.id_tipoproducto;
    tipoproductos.findByPk(id_tipoproducto)
    .then(tipoproducto=>{        
        if(tipoproducto){            
            tipoproducto.destroy({ where: {id_tipoproducto:id_tipoproducto} });
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