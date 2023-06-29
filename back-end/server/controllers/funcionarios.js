const funcionarios=require('../models').funcionarios;
const grados=require('../models').grados;
const usuarios=require('../models').usuarios;

function create (req,res){      
    funcionarios.create(req.body)      
    .then(funcionario=>{        
        req.body['id_funcionario'] = funcionario.get('id_funcionario');
        usuarios.create(req.body);   
        res.status(200).send({funcionario});        
    })
    .catch(err=>{
        res.status(500).send({err});
        
    })
}

function update (req,res){
    var id_funcionario=req.params.id_funcionario;
    var body=req.body;    
    funcionarios.findOne({
        where: { id_funcionario: id_funcionario },
        include: [
            { model: usuarios }
        ]
    })    
    .then(funcionario=>{             
        funcionario.usuario.update(body);        
        funcionario.update(body)
        .then(()=>{
            res.status(200).send({funcionario});
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
    var id_funcionario=req.params.id_funcionario;    
    funcionarios.findOne({
        where: { id_funcionario: id_funcionario },
        include: [
            {
                model: grados
            },
            {
                model: usuarios
            }
        ]        
    })    
    .then(funcionario=>{
        res.status(200).send({funcionario});
    })
    .catch(err=>{
        res.status(500).send({message:"No se encontró el Registro."});
    })
}

function getAll(req,res){
    funcionarios.findAll({ order:[['nombres_funcionario','ASC']] })
    .then(funcionario=>{
        res.status(200).send({funcionario});
    })
    .catch(err=>{
        res.status(500).send({message:"No se encontró el Registro."})
    })
}

function destroy(req,res){
    var id_funcionario=req.params.id_funcionario;
    funcionarios.findByPk(id_funcionario)
    .then(funcionario=>{        
        if(funcionario){            
            funcionario.destroy({ where: {id_funcionario:id_funcionario} });
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