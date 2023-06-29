module.exports=(sequelize,DataTypes)=>{
    const detalleordenes=sequelize.define('detalleordenes',{        
        cantidad_detalleordenes:{            
            type:DataTypes.INTEGER,
            allowNull: false
        },
        estado_detalleordenes:{
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: false
        }                
    });    
    detalleordenes.associate = function (models) {
        detalleordenes.belongsTo(models.mantenimientos, { 
            foreignKey: {
                name: 'id_mantenimiento',
                allowNull: false             
            },
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'            
        }),
        detalleordenes.belongsTo(models.ordenes, { 
            foreignKey: {
                name: 'id_orden',
                allowNull: false             
            },
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'            
        })                      
    };           
    return detalleordenes;    
}