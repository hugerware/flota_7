module.exports=(sequelize,DataTypes)=>{
    const circuitos=sequelize.define('circuitos',{
        id_circuito:{
            autoIncrement:true,
            primaryKey:true,
            type:DataTypes.INTEGER,
            allowNull: false
        },
        numero_circuito:{
            type: DataTypes.INTEGER,            
            allowNull: false            
        },
        codigo_circuito:{
            type: DataTypes.STRING(10),
            unique: 'actions_unique',
            allowNull: false,
            validate: {
                len: [3,10]
            }
        },
        nombre_circuito:{
            type: DataTypes.STRING(50),
            unique: 'actions_unique',
            allowNull: false,
            validate: {
                len: [5,50]
            }
        },
        estado_circuito:{
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: false
        }   
    });    
    circuitos.associate = function (models) {
        circuitos.belongsTo(models.distritos, { 
            foreignKey: {
                name: 'id_distrito',
                allowNull: false             
            },
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'            
        }),
        circuitos.hasMany(models.subcircuitos, { 
            foreignKey: {
                name: 'id_circuito',
                allowNull: false
            },
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'            
        }),
        circuitos.belongsToMany(models.parroquias, { 
            foreignKey: {
                name: 'id_circuito',
                allowNull: false
            },
            through: models.circuitoparroquias,
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'      
        })   
    };               
    return circuitos;    
}