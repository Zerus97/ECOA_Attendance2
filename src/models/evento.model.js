module.exports = (sequelize, DataTypes) => {

    const Evento = sequelize.define('evento', {
        event_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true

        },
        event_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        code: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        owner: {
            type: DataTypes.STRING,
            allowNull: false
        },
        data: {
            type: DataTypes.DATE,
            allowNull: false
        },
        starts: {
            type: DataTypes.TIME,
            allowNull: false
        },
        ends: {
            type: DataTypes.TIME,
            allowNull: false
        }
    })
    return Evento;
}

// const {DataTypes} = require('sequelize');
// const sequelize = require("../models/index");

// const Evento = sequelize.define('Evento', {
//     eventId: {
//         type: DataTypes.INTEGER,
//         autoIncrement: true,
//         allowNull: false,
//         primaryKey: true
//     },
//     eventName: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     code: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     owner: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     data: {
//         type: DataTypes.DATE,
//         allowNull: false
//     },
//     starts: {
//         type: DataTypes.TIME,
//         allowNull: false
//     },
//     ends: {
//         type: DataTypes.TIME,
//         allowNull: false
//     }
// }, {
//     sequelize,
//     modelName: 'Evento',
//     tableName: 'eventos',
//     timestamps: false
// });
// module.exports = Evento;