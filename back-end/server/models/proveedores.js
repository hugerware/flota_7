module.exports=(sequelize,DataTypes)=>{
    const proveedores=sequelize.define('proveedores',{
        id_proveedor:{
            autoIncrement:true,
            primaryKey:true,
            type:DataTypes.INTEGER,
            allowNull: false
        },
        ruc_proveedor:{
            type: DataTypes.STRING(13),
            unique: 'actions_unique',
            allowNull: false,
            validate: {
                len: [13,13]
            }
        },        
        nombre_proveedor:{
            type: DataTypes.STRING(50),
            unique: 'actions_unique',
            allowNull: false,
            validate: {
                len: [5,50]
            }
        },
        direccion_proveedor:{
            type: DataTypes.STRING(50),
            allowNull: false,
            validate: {
                len: [5,50]
            }
        },
        telefono_proveedor:{
            type: DataTypes.STRING(10),            
            allowNull: false,
            validate: {
                len: [10,10]
            }
        },                       
        estado_proveedor:{
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: false
        }
    });    
    proveedores.associate = function (models) {
        proveedores.hasMany(models.productos, { 
            foreignKey: {
                name: 'id_proveedor',                
                allowNull: false
            },
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'         
        }),
        proveedores.hasMany(models.kardexproductos, { 
            foreignKey: {
                name: 'id_proveedor',                
                allowNull: false
            },
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'         
        })                    
    };  
    return proveedores;    
}

