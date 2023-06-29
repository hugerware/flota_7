module.exports=(sequelize,DataTypes)=>{
    const tipoproductos=sequelize.define('tipoproductos',{
        id_tipoproducto:{
            autoIncrement:true,
            primaryKey:true,
            type:DataTypes.INTEGER,
            allowNull: false
        },        
        nombre_tipoproducto:{
            type: DataTypes.STRING(50),
            unique: 'actions_unique',
            allowNull: false,
            validate: {
                len: [4,50]
            }
        },
        descripcion_tipoproducto:{
            type: DataTypes.STRING(50)
        },
        estado_tipoproducto:{
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: false
        }   
    });        
    tipoproductos.associate = function (models) {
        tipoproductos.hasMany(models.productos, { 
            foreignKey: {
                name: 'id_tipoproducto',
                allowNull: false
            },
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'            
        })
    }           
    return tipoproductos;    
}