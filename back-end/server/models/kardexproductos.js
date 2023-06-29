
module.exports=(sequelize,DataTypes)=>{
    const kardexproductos=sequelize.define('kardexproductos',{
        id_kardexproducto:{
            autoIncrement:true,
            primaryKey:true,
            type:DataTypes.INTEGER,
            allowNull: false
        },
        fecha_kardexproducto:{
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW            
        },    
        precio_kardexproducto:{                        
            type:DataTypes.DOUBLE,
            allowNull: false
        },
        cantidad_kardexproducto:{            
            type:DataTypes.INTEGER,
            allowNull: false
        },
        saldo_kardexproducto:{            
            type:DataTypes.INTEGER,
            allowNull: false
        },
        estado_kardexproducto:{
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: false
        }                
    });    
    kardexproductos.associate = function (models) {
        kardexproductos.belongsTo(models.tipomovimientos, { 
            foreignKey: {
                name: 'id_tipomovimiento',
                allowNull: false             
            },
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'            
        }),
        kardexproductos.belongsTo(models.proveedores, { 
            foreignKey: {
                name: 'id_proveedor',
                allowNull: false             
            },
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'            
        }),
        kardexproductos.belongsTo(models.productos, { 
            foreignKey: {
                name: 'id_producto',
                allowNull: false             
            },
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'            
        }),
        kardexproductos.belongsTo(models.usuarios, { 
            foreignKey: {
                name: 'id_usuario',
                allowNull: false             
            },
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'            
        })              
    };           
    return kardexproductos;    
}