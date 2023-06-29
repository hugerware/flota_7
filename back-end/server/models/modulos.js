module.exports=(sequelize,DataTypes)=>{
    const modulos=sequelize.define('modulos',{
        id_modulo:{
            autoIncrement:true,
            primaryKey:true,
            type:DataTypes.INTEGER,
            allowNull: false
        },        
        nombre_modulo:{
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: 'actions_unique',
            validate: {
                len: [5,50]
            }
        },
        estado_modulo:{
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: false
        }                
    });    
    modulos.associate = function (models) {
        modulos.hasMany(models.modulosapermisos, { 
            foreignKey: {
                name: 'id_modulo',
                allowNull: false
            },
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'            
        })          
    };  
    return modulos;    
}