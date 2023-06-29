module.exports=(sequelize,DataTypes)=>{
    const funcionarios=sequelize.define('funcionarios',{
        id_funcionario:{
            autoIncrement:true,
            primaryKey:true,
            type:DataTypes.INTEGER,
            allowNull: false
        },        
        nombres_funcionario:{
            type: DataTypes.STRING(50),
            allowNull: false,
            validate: {
                len: [5,50]
            }
        },
        apellidos_funcionario:{
            type: DataTypes.STRING(50),
            allowNull: false,
            validate: {
                len: [5,50]
            }
        },
        fnacimiento_funcionario:{
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        tsangre_funcionario:{
            type: DataTypes.STRING(15),            
            allowNull: false,
            validate: {
                len: [2,15]
            }
        },
        ciudad_funcionario:{
            type: DataTypes.STRING(15),            
            allowNull: false,
            validate: {
                len: [5,15]
            }
        },
        cedula_funcionario:{
            type: DataTypes.STRING(10),
            unique: 'actions_unique',
            allowNull: false,
            validate: {
                len: [10,10]
            }
        },        
        celular_funcionario: {
            type: DataTypes.STRING(10),
            unique: 'actions_unique',
            allowNull: false,
            validate: {
                len: [10,10]
            }
        },       
        estado_funcionario:{
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: false
        }
    });    
    funcionarios.associate = function (models) {
        funcionarios.belongsTo(models.grados, { 
            foreignKey: {
                name: 'id_grado',                
                allowNull: false
            },
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'         
        }),
        funcionarios.hasOne(models.usuarios, { 
            foreignKey: {
                name: 'id_funcionario',
                unique: 'actions_unique',
                allowNull: false
            },
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'         
        }),
        funcionarios.hasMany(models.funcionariosubcircuitos, { 
            foreignKey: {
                name: 'id_funcionario',
                allowNull: false
            },
            onDelete: 'RESTRICT',
            onUpdate: 'CASCADE'         
        })                     
    };  
    return funcionarios;    
}

