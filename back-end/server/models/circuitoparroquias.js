module.exports=(sequelize,DataTypes)=>{
    const circuitoparroquias=sequelize.define('circuitoparroquias',{        
        estado_circuitoparroquia:{
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: false
        }   
    }, {
        timestamps: false
      });    
    
    return circuitoparroquias;    
}