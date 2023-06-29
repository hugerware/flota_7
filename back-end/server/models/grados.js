
module.exports=(sequelize,DataTypes)=>{
    const grados=sequelize.define('grados',{
        id_grado:{
            autoIncrement:true,
            primaryKey:true,
            type:DataTypes.INTEGER,
            allowNull: false
        },        
        nombre_grado:{
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: 'actions_unique',
            validate: {
                len: [5,50]
            }
        },
        categoria_grado:{
            type: DataTypes.STRING(50),
            allowNull: true
        },
        estado_grado:{
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: false
        }                
    });    
    grados.associate = function (models) {
        grados.hasOne(models.funcionarios, { 
            foreignKey: 'id_grado',
            unique: 'actions_unique',
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'         
        })       
    };  
    return grados;    
}