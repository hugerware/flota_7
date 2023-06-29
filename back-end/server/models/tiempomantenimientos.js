
module.exports=(sequelize,DataTypes)=>{
    const tiempomantenimientos=sequelize.define('tiempomantenimientos',{
        id_tiempomantenimiento:{
            autoIncrement:true,
            primaryKey:true,
            type:DataTypes.INTEGER,
            allowNull: false
        },                
        nombre_tiempomantenimiento:{
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: 'actions_unique',
            validate: {
                len: [5,50]
            }
        },        
        observacion_tiempomantenimiento:{
            type: DataTypes.STRING(50),
            allowNull: true
        },
        estado_tiempomantenimiento:{
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: false
        }                
    });    
    // tiempomantenimientos.associate = function (models) {
    //     tiempomantenimientos.hasMany(models.kardexproductos, { 
    //         foreignKey: {
    //             name: 'id_tiempomantenimiento',
    //             allowNull: false             
    //         },
    //         onDelete: 'RESTRICT',
    //         onUpdate: 'CASCADE'            
    //     }),
    //     tiempomantenimientos.hasMany(models.kardexvehiculos, { 
    //         foreignKey: {
    //             name: 'id_tiempomantenimiento',
    //             allowNull: false             
    //         },
    //         onDelete: 'RESTRICT',
    //         onUpdate: 'CASCADE'            
    //     })                        
    // };                 
    return tiempomantenimientos;    
}