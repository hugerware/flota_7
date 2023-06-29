module.exports=(sequelize,DataTypes)=>{
    const ordenes=sequelize.define('ordenes',{
        id_orden:{
            autoIncrement:true,
            primaryKey:true,
            type:DataTypes.INTEGER,
            allowNull: false
        },
        fechaingreso_orden:{
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW            
        },
        fechaentrega_orden:{
            type: DataTypes.DATE
        },    
        observacion_orden:{
            type: DataTypes.STRING(50),                
            allowNull: true
        },        
        estado_orden:{
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: false
        }                
    });    
    ordenes.associate = function (models) {        
        ordenes.belongsTo(models.usuarios, { 
            foreignKey: {
                name: 'id_usuario',
                allowNull: false             
            },
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'            
        }),
        ordenes.hasOne(models.detalleordenes, { 
            foreignKey: {
                name: 'id_orden',
                unique: 'actions_unique',
                allowNull: false
            },
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'         
        })   
    };           
    return ordenes;    
}