module.exports=(sequelize,DataTypes)=>{
    
    const roles=sequelize.define('roles',{
        id_rol:{
            autoIncrement:true,
            primaryKey:true,
            type:DataTypes.INTEGER,
            allowNull: false
        },
        nombre_rol:{
            type: DataTypes.STRING(50),
            unique: 'actions_unique',
            allowNull: false,
            validate: {
                len: [5,50]
            }
        },
        descripcion_rol:{
            type: DataTypes.STRING(50),
            allowNull: true
        },
        estado_rol:{
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: false
        }         
    });    
    roles.associate = function (models) {
        roles.hasMany(models.permisos, { 
            foreignKey: {
                name: 'id_rol',
                allowNull: false
            },
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'            
        }),
        roles.belongsToMany(models.usuarios, { 
            foreignKey: {
                name: 'id_rol',
                allowNull: false
            },
            through: models.usuariosaroles,
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'            
        })
    };           
    return roles;    
}