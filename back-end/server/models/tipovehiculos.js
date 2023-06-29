module.exports=(sequelize,DataTypes)=>{
    const tipovehiculos=sequelize.define('tipovehiculos',{
        id_tipovehiculo:{
            autoIncrement:true,
            primaryKey:true,
            type:DataTypes.INTEGER,
            allowNull: false
        },        
        nombre_tipovehiculo:{
            type: DataTypes.STRING(50),
            unique: 'actions_unique',
            allowNull: false,
            validate: {
                len: [5,50]
            }
        },
        descripcion_tipovehiculo:{
            type: DataTypes.STRING(50)
        },
        estado_tipovehiculo:{
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: false
        }   
    });        
    tipovehiculos.associate = function (models) {
        tipovehiculos.hasMany(models.vehiculos, { 
            foreignKey: {
                name: 'id_tipovehiculo',
                allowNull: false
            },
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'            
        })
    }           
    return tipovehiculos;    
}