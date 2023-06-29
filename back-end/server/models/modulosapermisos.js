module.exports=(sequelize,DataTypes)=>{
    const modulosapermisos=sequelize.define('modulosapermisos',{
      id_modulosapermiso:{
        autoIncrement:true,
        primaryKey:true,
        type:DataTypes.INTEGER,
        allowNull: false
      }
      }, {
          timestamps: false
        }
    );   
    modulosapermisos.associate = function (models) {
      modulosapermisos.belongsTo(models.modulos, { 
        foreignKey: 'id_modulo',
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE'            
      }),
      modulosapermisos.belongsTo(models.permisos, { 
        foreignKey: 'id_permiso',
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE'            
      })
    };      
      return modulosapermisos;    
  }