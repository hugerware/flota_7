
module.exports=(sequelize,DataTypes)=>{
    const tipomantenimientos=sequelize.define('tipomantenimientos',{
        id_tipomantenimiento:{
            autoIncrement:true,
            primaryKey:true,
            type:DataTypes.INTEGER,
            allowNull: false
        },                
        nombre_tipomantenimiento:{
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: 'actions_unique',
            validate: {
                len: [5,50]
            }
        },        
        observacion_tipomantenimiento:{
            type: DataTypes.STRING(250),
            allowNull: true
        },
        precio_tipomantenimiento:{
            type: DataTypes.DOUBLE,
            allowNull: true
        },
        estado_tipomantenimiento:{
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: false
        }                
    });    
    tipomantenimientos.associate = function (models) {
        tipomantenimientos.hasMany(models.mantenimientos, { 
            foreignKey: {
                name: 'id_tipomantenimiento',
                allowNull: false             
            },
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'            
        })
    };                 
    return tipomantenimientos;    
}