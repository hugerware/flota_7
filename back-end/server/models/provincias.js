module.exports=(sequelize,DataTypes)=>{
    const provincias=sequelize.define('provincias',{
        id_provincia:{
            autoIncrement:true,
            primaryKey:true,
            type:DataTypes.INTEGER,
            allowNull: false
        },
        nombre_provincia:{
            type: DataTypes.STRING(50),
            unique: 'actions_unique',
            allowNull: false,
            validate: {
                len: [2,50]
            }
        },
        estado_provincia:{
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: false
        }   
    });     
    provincias.associate = function (models) {
        provincias.hasMany(models.distritos, { 
            foreignKey: {
                name: 'id_provincia',
                allowNull: false
            },
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'            
        })
    };           
    return provincias;    
}