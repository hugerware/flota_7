module.exports=(sequelize,DataTypes)=>{
    const mantenimientos=sequelize.define('mantenimientos',{
        id_mantenimiento:{
            autoIncrement:true,
            primaryKey:true,
            type:DataTypes.INTEGER,
            allowNull: false
        },
        fecha_mantenimiento:{
            type: DataTypes.DATEONLY,
            defaultValue: DataTypes.NOW 
        },
        hora_mantenimiento:{
            type: DataTypes.TIME,
            allowNull: false
        },        
        parteo_mantenimiento:{
            type: DataTypes.STRING(50),                
            allowNull: true
        },
        asunto_mantenimiento:{
            type: DataTypes.STRING(50),                
            allowNull: true
        },
        detalle_mantenimiento:{
            type: DataTypes.STRING(50),                
            allowNull: true
        },           
        estado_mantenimiento:{
            type: DataTypes.STRING(50),    
            defaultValue: 'Pendiente',
            allowNull: false
        }   
    });    
    mantenimientos.associate = function (models) {
        mantenimientos.belongsTo(models.kilometrajes, { 
            foreignKey: {
                name: 'id_kilometraje',
                allowNull: false             
            },
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'            
        }),
        mantenimientos.belongsTo(models.vehiculosubcircuitos, { 
            foreignKey: {
                name: 'id_vehiculosubcircuito',
                allowNull: false             
            },
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'            
        }),
        mantenimientos.belongsTo(models.funcionariosubcircuitos, { 
            foreignKey: {
                name: 'id_funcionariosubcircuito',
                allowNull: false             
            },
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'            
        }),
        mantenimientos.belongsTo(models.solicitamantenimientos, { 
            foreignKey: 'id_solicitamantenimiento',
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'       
        }),
        mantenimientos.belongsTo(models.tipomantenimientos, { 
            foreignKey: 'id_tipomantenimiento',
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'       
        }),
        mantenimientos.hasMany(models.detalleordenes, { 
            foreignKey: {
                name: 'id_mantenimiento',
                allowNull: false             
            },
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'            
        })
    };    
    return mantenimientos;    
}