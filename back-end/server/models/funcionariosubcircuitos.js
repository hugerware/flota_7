module.exports=(sequelize,DataTypes)=>{
    const funcionariosubcircuitos=sequelize.define('funcionariosubcircuitos',{
        id_funcionariosubcircuito:{
            autoIncrement:true,
            primaryKey:true,
            type:DataTypes.INTEGER,
            allowNull: false
        },
        fecha_funcionariosubcircuito:{
            type: DataTypes.DATEONLY,
            defaultValue: DataTypes.NOW 
        },
        observacion_funcionariosubcircuito:{
            type: DataTypes.STRING(50),            
            allowNull: true            
        },
        estado_funcionariosubcircuito:{
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: false
        }   
    });    
    funcionariosubcircuitos.associate = function (models) {
        funcionariosubcircuitos.belongsTo(models.funcionarios, { 
            foreignKey: {
                name: 'id_funcionario',
                allowNull: false             
            },
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'            
        }),
        funcionariosubcircuitos.belongsTo(models.subcircuitos, { 
            foreignKey: {
                name: 'id_subcircuito',
                allowNull: false             
            },
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'            
        }),
        funcionariosubcircuitos.hasMany(models.solicitamantenimientos, { 
            foreignKey: {
                name: 'id_funcionariosubcircuito',
                allowNull: false
            },
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'            
        })                                 
    };
    return funcionariosubcircuitos;    
}