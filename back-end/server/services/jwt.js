var njwt=require('njwt');
var config=require('../config/config');
var secret=config.token_secret;


exports.createToken=(usuario)=>{
    var params={
        sub:usuario.id_usuario,
        login_usuario:usuario.login_usuario,
        id_rol:usuario.id_rol
    }
    var jwt=njwt.create(params, secret);

    var t = new Date();
    t.setHours(t.getHours()+3);
    jwt.setExpiration(t);

    var token=jwt.compact();

    return token;
}