module.exports=(sequelize,DataTypes)=>{
  const usuariosaroles=sequelize.define('usuariosaroles',{
    id_usuariosarol:{
      autoIncrement:true,
      primaryKey:true,
      type:DataTypes.INTEGER,
      allowNull: false
    }
    }, {
        timestamps: false
      }
  );    
    return usuariosaroles;    
}