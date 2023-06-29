
module.exports=(sequelize,DataTypes)=>{
    const tipomovimientos=sequelize.define('tipomovimientos',{
        id_tipomovimiento:{
            autoIncrement:true,
            primaryKey:true,
            type:DataTypes.INTEGER,
            allowNull: false
        },                
        nombre_tipomovimiento:{
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: 'actions_unique',
            validate: {
                len: [5,50]
            }
        },        
        observacion_tipomovimiento:{
            type: DataTypes.STRING(50),
            allowNull: true
        },
        estado_tipomovimiento:{
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: false
        }                
    });    
    tipomovimientos.associate = function (models) {
        tipomovimientos.hasMany(models.kardexproductos, { 
            foreignKey: {
                name: 'id_tipomovimiento',
                allowNull: false             
            },
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'            
        }),
        tipomovimientos.hasMany(models.kardexvehiculos, { 
            foreignKey: {
                name: 'id_tipomovimiento',
                allowNull: false             
            },
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'            
        })                        
    };                 
    return tipomovimientos;    
}