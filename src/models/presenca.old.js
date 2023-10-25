'use strict';

module.exports = (sequelize, DataTypes) => {
  
  const model = sequelize.define('presenca', {
    id: { type:DataTypes.INTEGER, autoIncrement:true, primaryKey: true, field: 'id'},
    matriculaAluno: { type:DataTypes.TEXT, field: 'matricula_aluno'}
  }, {          
      freezeTableName: true,
      tableName: 'presenca'
  });

  return model;

};