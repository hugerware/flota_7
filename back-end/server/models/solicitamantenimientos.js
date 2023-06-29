module.exports=(sequelize,DataTypes)=>{
    const solicitamantenimientos=sequelize.define('solicitamantenimientos',{
        id_solicitamantenimiento:{
            autoIncrement:true,
            primaryKey:true,
            type:DataTypes.INTEGER,
            allowNull: false
        },
        fecha_solicitamantenimiento:{
            type: DataTypes.DATEONLY,
            defaultValue: DataTypes.NOW 
        },
        hora_solicitamantenimiento:{
            type: DataTypes.TIME,
            allowNull: false
        },
        observacion_solicitamantenimiento:{
            type: DataTypes.STRING(50),            
            allowNull: true            
        },
        prioridad_solicitamantenimiento:{
            type: DataTypes.STRING(50),    
            defaultValue: 'Normal',
            allowNull: false
        },   
        estado_solicitamantenimiento:{
            type: DataTypes.STRING(50),    
            defaultValue: 'Pendiente',
            allowNull: false
        }   
    });    
    solicitamantenimientos.associate = function (models) {
        solicitamantenimientos.belongsTo(models.kilometrajes, { 
            foreignKey: {
                name: 'id_kilometraje',
                allowNull: false             
            },
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'            
        }),
        solicitamantenimientos.belongsTo(models.vehiculosubcircuitos, { 
            foreignKey: {
                name: 'id_vehiculosubcircuito',
                allowNull: false             
            },
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'            
        }),
        solicitamantenimientos.belongsTo(models.funcionariosubcircuitos, { 
            foreignKey: {
                name: 'id_funcionariosubcircuito',
                allowNull: false             
            },
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'            
        }),
        solicitamantenimientos.hasOne(models.mantenimientos, { 
            foreignKey: {
                name: 'id_solicitamantenimiento',
                unique: 'actions_unique',
                allowNull: false
            },
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'         
        })
    };    
    return solicitamantenimientos;    
}