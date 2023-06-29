const usuarios=require('../models').usuarios;
const jwt=require('../services/jwt');
const { QueryTypes } = require('sequelize');

function create (req,res){
    usuarios.create(req.body)
    .then(usuario=>{
        res.status(200).send({usuario});
    })
    .catch(err=>{
        res.status(500).send({err});
    })
}

function update (req,res){
    var id_usuario=req.params.id_usuario;
    var body=req.body;
    usuarios.findByPk(id_usuario)    
    .then(usuario=>{
        usuario.update(body)
        .then(()=>{
            res.status(200).send({usuario});
        })
        .catch(err=>{
            res.status(500).send({message:"Registro no actualizado."});    
        })
    })
    .catch(err=>{
        res.status(500).send({message:"Ocurrió un error al buscar el registro."});
    })
}

function login(req,res){    
    usuarios.findOne({
        where:{
            login_usuario:req.body.login_usuario,
            password_usuario:req.body.password_usuario,
            estado_usuario:true
        }
    })
    .then(usuario=>{        
        if(usuario){                    
            if(req.body.token){
                res.status(200).send({                                        
                    token:jwt.createToken(usuario)
                });
            }else{
                res.status(200).send({
                    usuario:usuario               
                });
            }            
        } else{
            res.status(401).send({message:"Acceso no autorizado."})
        }        
    })
    .catch(err=>{
        res.status(500).send({message:"Usuario no encontrado."});
    })
}

function getOne (req,res){
    var id_usuario=req.params.id_usuario;    
    usuarios.findByPk(id_usuario)    
    .then(usuario=>{
        res.status(200).send({usuario});
    })
    .catch(err=>{
        res.status(500).send({message:"No se encontró el Registro."});
    })
}

function getAll(req,res){
    usuarios.findAll({ order:[['login_usuario','ASC']] })
    .then(usuarios=>{
        res.status(200).send({usuarios});

    })
    .catch(err=>{
        res.status(500).send({message:"Usuario no encontrado."})
    })
}

function destroy(req,res){
    var id_usuario=req.params.id_usuario;
    usuarios.findByPk(id_usuario)
    .then(usuario=>{        
        if(usuario){            
            usuario.destroy({ where: {id_usuario:id_usuario} });
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
    login,
    getAll,
    update,
    getOne,
    destroy
}