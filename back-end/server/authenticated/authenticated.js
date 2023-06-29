var njwt=require('njwt');
var config=require('../config/config');
var secret=config.token_secret;

function auth(req,res,next){
    if(!req.headers.authorization){
        return res.status(403).send({message:"La petición no tiene cabezera de autenticación"});
    }

    var token=req.headers.authorization.replace(/['"]+/g,'');
    var payload=njwt.verify(token,secret,(err,verifiedJwt)=>{
        if(err){
            return res.status(401).send({message:"Acceso no autorizado."})
        }else{
            next();
        }
    });

}


module.exports={
    auth
}