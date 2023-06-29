module.exports=(sequelize,DataTypes)=>{
    const parroquias=sequelize.define('parroquias',{
        id_parroquia:{
            autoIncrement:true,
            primaryKey:true,
            type:DataTypes.INTEGER,
            allowNull: false
        },
        nombre_parroquia:{
            type: DataTypes.STRING(50),
            unique: 'actions_unique',
            allowNull: false,
            validate: {
                len: [4,50]
            }
        },
        estado_parroquia:{
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: false
        }   
    });     
    parroquias.associate = function (models) {
        
        parroquias.belongsToMany(models.circuitos, { 
            foreignKey: {
                name: 'id_parroquia',
                allowNull: false
            },
            through: models.circuitoparroquias,
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'      
        })           
    };           
    return parroquias;    
}