module.exports=(sequelize,DataTypes)=>{
    const vehiculos=sequelize.define('vehiculos',{
        id_vehiculo:{
            autoIncrement:true,
            primaryKey:true,
            type:DataTypes.INTEGER,
            allowNull: false
        },        
        placa_vehiculo:{
            type: DataTypes.STRING(10),
            unique: 'actions_unique',
            allowNull: false,
            validate: {
                len: [3,10]
            }
        },
        chasis_vehiculo:{
            type: DataTypes.STRING(150),
            unique: 'actions_unique',
            allowNull: false,
            validate: {
                len: [5,150]
            }
        },
        marca_vehiculo:{
            type: DataTypes.STRING(50),            
            allowNull: false,
            validate: {
                len: [3,50]
            }
        },
        modelo_vehiculo:{
            type: DataTypes.STRING(50),            
            allowNull: false,
            validate: {
                len: [5,50]
            }
        },
        motor_vehiculo:{
            type: DataTypes.STRING(150),            
            allowNull: false,
            validate: {
                len: [5,150]
            }
        },
        cilindraje_vehiculo:{
            type: DataTypes.STRING(50),            
            allowNull: false,
            validate: {
                len: [3,50]
            }
        },
        capacidadcarga_vehiculo:{
            type: DataTypes.FLOAT,            
            allowNull: true
        },
        numeropasajeros_vehiculo:{
            type:DataTypes.INTEGER,            
            allowNull: true
        },
        estado_vehiculo:{
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: false
        }   
    });  
    vehiculos.associate = function (models) {
        vehiculos.belongsTo(models.tipovehiculos, { 
            foreignKey: {
                name: 'id_tipovehiculo',
                allowNull: false             
            },
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'            
        }),
        vehiculos.hasMany(models.kardexvehiculos, { 
            foreignKey: {
                name: 'id_vehiculo',
                allowNull: false             
            },
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'            
        }),
        vehiculos.hasMany(models.kilometrajes, { 
            foreignKey: {
                name: 'id_vehiculo',
                allowNull: false             
            },
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'            
        }),
        vehiculos.hasMany(models.matriculas, { 
            foreignKey: {
                name: 'id_vehiculo',
                allowNull: false             
            },
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'            
        }),
        vehiculos.hasMany(models.vehiculosubcircuitos, { 
            foreignKey: {
                name: 'id_vehiculo',
                allowNull: false
            },
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'         
        }),
        vehiculos.hasMany(models.solicitasignaciones, { 
            foreignKey: {
                name: 'id_vehiculo',
                allowNull: false
            },
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'         
        })                                                                   
    };  
                   
    return vehiculos;    
}