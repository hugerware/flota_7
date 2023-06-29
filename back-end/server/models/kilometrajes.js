
module.exports=(sequelize,DataTypes)=>{
    const kilometrajes=sequelize.define('kilometrajes',{
        id_kilometraje:{
            autoIncrement:true,
            primaryKey:true,
            type:DataTypes.INTEGER,
            allowNull: false
        },                
        actual_kilometraje:{
            type: DataTypes.DOUBLE,
            allowNull: false            
        },
        fecha_kilometraje:{
            type: DataTypes.DATEONLY,
            defaultValue: DataTypes.NOW
        },        
        observacion_kilometraje:{
            type: DataTypes.STRING(50),
            allowNull: true
        },
        estado_kilometraje:{
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: false
        }                
    });    
    kilometrajes.associate = function (models) {
        kilometrajes.hasMany(models.solicitamantenimientos, { 
            foreignKey: {
                name: 'id_kilometraje',
                allowNull: false
            },
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'            
        })          
    };                 
    return kilometrajes;    
}