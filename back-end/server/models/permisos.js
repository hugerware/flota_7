module.exports=(sequelize,DataTypes)=>{
    const permisos=sequelize.define('permisos',{
        id_permiso:{
            autoIncrement:true,
            primaryKey:true,
            type:DataTypes.INTEGER,
            allowNull: false
        },
        nombre_permiso:{
            type: DataTypes.STRING(50),            
            allowNull: false,
            validate: {
                len: [5,50]
            }
        },
        estado_permiso:{
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: false
        }    
    });     
    permisos.associate = function (models) {
        permisos.belongsTo(models.roles, { 
            foreignKey: {
                name: 'id_rol',
                allowNull: false             
            },
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'            
        }),
        permisos.hasMany(models.modulosapermisos, { 
            foreignKey: {
                name: 'id_permiso',
                allowNull: false
            },
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'            
        })        
    };           
    return permisos;    
}