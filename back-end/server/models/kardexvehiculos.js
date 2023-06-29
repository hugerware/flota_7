
module.exports=(sequelize,DataTypes)=>{
    const kardexvehiculos=sequelize.define('kardexvehiculos',{
        id_kardexvehiculo:{
            autoIncrement:true,
            primaryKey:true,
            type:DataTypes.INTEGER,
            allowNull: false
        },
        fecha_kardexvehiculo:{
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW            
        },    
        precio_kardexvehiculo:{                        
            type:DataTypes.DOUBLE
        },
        cantidad_kardexvehiculo:{            
            type:DataTypes.INTEGER,
            defaultValue: 0,            
            allowNull: false
        },
        saldo_kardexvehiculo:{            
            type:DataTypes.INTEGER,
            allowNull: false
        },
        estado_kardexvehiculo:{
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: false
        }                
    });    
    kardexvehiculos.associate = function (models) {
        kardexvehiculos.belongsTo(models.tipomovimientos, { 
            foreignKey: {
                name: 'id_tipomovimiento',
                allowNull: false             
            },
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'            
        }),        
        kardexvehiculos.belongsTo(models.vehiculos, { 
            foreignKey: {
                name: 'id_vehiculo',
                allowNull: false             
            },
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'            
        }),
        kardexvehiculos.belongsTo(models.usuarios, { 
            foreignKey: {
                name: 'id_usuario',
                allowNull: false             
            },
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'            
        })              
    };           
    return kardexvehiculos;    
}