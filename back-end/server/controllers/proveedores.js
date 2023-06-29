const proveedores=require('../models').proveedores;

function create (req,res){
    proveedores.create(req.body)
    .then(proveedor=>{
        res.status(200).send({proveedor});
    })
    .catch(err=>{
        res.status(500).send({err});
    })
}

function update (req,res){
    var id_proveedor=req.params.id_proveedor;
    var body=req.body;
    proveedores.findByPk(id_proveedor)    
    .then(proveedor=>{
        proveedor.update(body)
        .then(()=>{
            res.status(200).send({proveedor});
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
    var id_proveedor=req.params.id_proveedor;    
    proveedores.findByPk(id_proveedor)    
    .then(proveedor=>{
        res.status(200).send({proveedor});
    })
    .catch(err=>{
        res.status(500).send({message:"No se encontró el Registro."});
    })
}

function getAll(req,res){
    proveedores.findAll({ order:[['nombre_proveedor','ASC']] })
    .then(proveedor=>{
        res.status(200).send({proveedor});
    })
    .catch(err=>{
        res.status(500).send({message:"No se encontró el Registro."})
    })
}

function destroy(req,res){
    var id_proveedor=req.params.id_proveedor;
    proveedores.findByPk(id_proveedor)
    .then(proveedor=>{        
        if(proveedor){            
            proveedor.destroy({ where: {id_proveedor:id_proveedor} });
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