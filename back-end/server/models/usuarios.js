module.exports=(sequelize,DataTypes)=>{
    const usuarios=sequelize.define('usuarios',{
        id_usuario:{
            autoIncrement:true,
            primaryKey:true,
            type:DataTypes.INTEGER,
            allowNull: false
        },
        login_usuario:{
            type: DataTypes.STRING(15),
            unique: 'actions_unique',
            allowNull: false,
            validate: {
                len: [5,15]
            }
        },
        email_usuario:{
            type: DataTypes.STRING(50),
            unique: 'actions_unique',
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        password_usuario:{
            type: DataTypes.STRING(64),
            allowNull: false
        },        
        estado_usuario: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: false
        }
    });     
    usuarios.associate = function (models) {
        usuarios.belongsToMany(models.roles, { 
            foreignKey: {
                name:'id_usuario',
                allowNull: false
            },
            through: models.usuariosaroles,
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'            
        }),
        usuarios.belongsTo(models.funcionarios, { 
            foreignKey: 'id_funcionario',
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'       
        }),
        usuarios.hasMany(models.kardexproductos, { 
            foreignKey: {
                name: 'id_usuario',
                allowNull: false             
            },
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'            
        }),
        usuarios.hasMany(models.kardexvehiculos, { 
            foreignKey: {
                name: 'id_usuario',
                allowNull: false             
            },
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'            
        }),
        usuarios.hasMany(models.solicitasignaciones, { 
            foreignKey: {
                name: 'id_usuario',
                allowNull: false             
            },
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'            
        }),
        usuarios.hasMany(models.ordenes, { 
            foreignKey: {
                name: 'id_usuario',
                allowNull: false             
            },
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'            
        })                                
    };     
    return usuarios;        
}
