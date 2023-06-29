module.exports=(sequelize,DataTypes)=>{
    const solicitasignaciones=sequelize.define('solicitasignaciones',{
        id_solicitasignacion:{
            autoIncrement:true,
            primaryKey:true,
            type:DataTypes.INTEGER,
            allowNull: false
        },
        fecha_solicitasignacion:{
            type: DataTypes.DATEONLY,
            defaultValue: DataTypes.NOW 
        },
        observacion_solicitasignacion:{
            type: DataTypes.STRING(50),            
            allowNull: true            
        },
        estado_solicitasignacion:{
            type: DataTypes.STRING(50),    
            defaultValue: 'Pendiente',
            allowNull: false
        }   
    });    
    solicitasignaciones.associate = function (models) {
        solicitasignaciones.belongsTo(models.usuarios, { 
            foreignKey: {
                name: 'id_usuario',
                allowNull: false             
            },
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'            
        }),
        solicitasignaciones.belongsTo(models.vehiculos, { 
            foreignKey: {
                name: 'id_vehiculo',
                allowNull: false             
            },
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'            
        })                
    };
    
    return solicitasignaciones;    
}