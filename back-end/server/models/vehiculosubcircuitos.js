module.exports=(sequelize,DataTypes)=>{
    const vehiculosubcircuitos=sequelize.define('vehiculosubcircuitos',{
        id_vehiculosubcircuito:{
            autoIncrement:true,
            primaryKey:true,
            type:DataTypes.INTEGER,
            allowNull: false
        },
        fecha_vehiculosubcircuito:{
            type: DataTypes.DATEONLY,
            defaultValue: DataTypes.NOW 
        },
        observacion_vehiculosubcircuito:{
            type: DataTypes.STRING(50),            
            allowNull: true            
        },
        estado_vehiculosubcircuito:{
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: false
        }   
    });    
    vehiculosubcircuitos.associate = function (models) {
        vehiculosubcircuitos.belongsTo(models.vehiculos, { 
            foreignKey: {
                name: 'id_vehiculo',
                allowNull: false             
            },
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'            
        }),
        vehiculosubcircuitos.belongsTo(models.subcircuitos, { 
            foreignKey: {
                name: 'id_subcircuito',
                allowNull: false             
            },
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'            
        }),
        vehiculosubcircuitos.hasMany(models.solicitamantenimientos, { 
            foreignKey: {
                name: 'id_vehiculosubcircuito',
                allowNull: false
            },
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'            
        })                    
    };
    return vehiculosubcircuitos;    
}