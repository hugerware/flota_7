module.exports=(sequelize,DataTypes)=>{
    const subcircuitos=sequelize.define('subcircuitos',{
        id_subcircuito:{
            autoIncrement:true,
            primaryKey:true,
            type:DataTypes.INTEGER,
            allowNull: false
        },
        numero_subcircuito:{
            type: DataTypes.INTEGER,            
            allowNull: false            
        },
        codigo_subcircuito:{
            type: DataTypes.STRING(20),
            unique: 'actions_unique',
            allowNull: false,
            validate: {
                len: [3,20]
            }
        },
        nombre_subcircuito:{
            type: DataTypes.STRING(50),
            unique: 'actions_unique',
            allowNull: false,
            validate: {
                len: [5,50]
            }
        },
        estado_subcircuito:{
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: false
        }   
    });    
    subcircuitos.associate = function (models) {        
        subcircuitos.belongsTo(models.circuitos, { 
            foreignKey: {
                name: 'id_circuito',
                allowNull: false             
            },
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'            
        }),
        subcircuitos.hasMany(models.funcionariosubcircuitos, { 
            foreignKey: {
                name: 'id_subcircuito',
                allowNull: false
            },
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'         
        }),
        subcircuitos.hasMany(models.vehiculosubcircuitos, { 
            foreignKey: {
                name: 'id_subcircuito',
                allowNull: false
            },
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'         
        })                                   
    };                
    return subcircuitos;    
}