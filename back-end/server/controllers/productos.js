const productos=require('../models').productos;

function create (req,res){
    productos.create(req.body)
    .then(producto=>{
        res.status(200).send({producto});
    })
    .catch(err=>{
        res.status(500).send({err});
    })
}

function update (req,res){
    var id_producto=req.params.id_producto;
    var body=req.body;
    productos.findByPk(id_producto)    
    .then(producto=>{
        producto.update(body)
        .then(()=>{
            res.status(200).send({producto});
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
    var id_producto=req.params.id_producto;    
    productos.findByPk(id_producto)    
    .then(producto=>{
        res.status(200).send({producto});
    })
    .catch(err=>{
        res.status(500).send({message:"No se encontró el Registro."});
    })
}

function getAll(req,res){
    productos.findAll({ order:[['nombre_producto','ASC']] })
    .then(producto=>{
        res.status(200).send({producto});
    })
    .catch(err=>{
        res.status(500).send({message:"No se encontró el Registro."})
    })
}

function destroy(req,res){
    var id_producto=req.params.id_producto;
    productos.findByPk(id_producto)
    .then(producto=>{        
        if(producto){            
            producto.destroy({ where: {id_producto:id_producto} });
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