module.exports=(sequelize,DataTypes)=>{
    const unidadmedidas=sequelize.define('unidadmedidas',{
        id_unidadmedida:{
            autoIncrement:true,
            primaryKey:true,
            type:DataTypes.INTEGER,
            allowNull: false
        },
        simbolo_unidadmedida:{
            type: DataTypes.STRING(10),
            unique: 'actions_unique',
            allowNull: false,
            validate: {
                len: [1,10]
            }
        },        
        nombre_unidadmedida:{
            type: DataTypes.STRING(50),
            unique: 'actions_unique',
            allowNull: false,
            validate: {
                len: [5,50]
            }
        },                               
        estado_unidadmedida:{
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: false
        }
    });    
    unidadmedidas.associate = function (models) {
        unidadmedidas.hasMany(models.productos, { 
            foreignKey: {
                name: 'id_unidadmedida',                
                allowNull: false
            },
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'         
        })                    
    };  
    return unidadmedidas;    
}

