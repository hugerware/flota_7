
module.exports=(sequelize,DataTypes)=>{
    const matriculas=sequelize.define('matriculas',{
        id_matricula:{
            autoIncrement:true,
            primaryKey:true,
            type:DataTypes.INTEGER,
            allowNull: false
        },                
        actual_matricula:{
            type: DataTypes.DATE,
            allowNull: false            
        },
        fecha_matricula:{
            type: DataTypes.DATEONLY,
            defaultValue: DataTypes.NOW
        },        
        observacion_matricula:{
            type: DataTypes.STRING(50),
            allowNull: true
        },
        estado_matricula:{
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: false
        }                
    });    
    matriculas.associate = function (models) {
        matriculas.belongsTo(models.vehiculos, { 
            foreignKey: {
                name: 'id_vehiculo',
                allowNull: false             
            },
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'            
        })        
    };                 
    return matriculas;    
}