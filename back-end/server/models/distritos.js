module.exports=(sequelize,DataTypes)=>{
    const distritos=sequelize.define('distritos',{
        id_distrito:{
            autoIncrement:true,
            primaryKey:true,
            type:DataTypes.INTEGER,
            allowNull: false
        },
        numero_distrito:{
            type: DataTypes.INTEGER,
            unique: 'actions_unique',
            allowNull: false            
        },
        codigo_distrito:{
            type: DataTypes.STRING(10),
            unique: 'actions_unique',
            allowNull: false,
            validate: {
                len: [3,10]
            }
        },
        nombre_distrito:{
            type: DataTypes.STRING(50),
            unique: 'actions_unique',
            allowNull: false,
            validate: {
                len: [2,50]
            }
        },
        estado_distrito:{
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: false
        }   
    });    
    distritos.associate = function (models) {
        distritos.belongsTo(models.provincias, { 
            foreignKey: {
                name: 'id_provincia',
                allowNull: false             
            },
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'            
        }),        
        distritos.hasMany(models.circuitos, { 
            foreignKey: {
                name: 'id_distrito',
                allowNull: false
            },
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'            
        })       
    };
    return distritos;    
}