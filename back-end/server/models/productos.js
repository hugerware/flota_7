
module.exports=(sequelize,DataTypes)=>{
    const productos=sequelize.define('productos',{
        id_producto:{
            autoIncrement:true,
            primaryKey:true,
            type:DataTypes.INTEGER,
            allowNull: false
        },
        codigo_producto:{
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: 'actions_unique',
            validate: {
                len: [5,50]
            }
        },        
        nombre_producto:{
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: 'actions_unique',
            validate: {
                len: [5,50]
            }
        },
        serie_producto:{
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: 'actions_unique',
            validate: {
                len: [5,50]
            }
        },
        marca_producto:{
            type: DataTypes.STRING(50),
            allowNull: false
        },
        estado_producto:{
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: false
        }                
    });    
    productos.associate = function (models) {
        productos.belongsTo(models.tipoproductos, { 
            foreignKey: {
                name: 'id_tipoproducto',
                allowNull: false             
            },
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'            
        }),
        productos.belongsTo(models.proveedores, { 
            foreignKey: {
                name: 'id_proveedor',
                allowNull: false             
            },
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'            
        }),
        productos.belongsTo(models.unidadmedidas, { 
            foreignKey: {
                name: 'id_unidadmedida',
                allowNull: false             
            },
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'            
        }),
        productos.hasMany(models.kardexproductos, { 
            foreignKey: {
                name: 'id_producto',                
                allowNull: false
            },
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'         
        })                                    
    };                 
    return productos;    
}