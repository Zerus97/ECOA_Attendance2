const service = require('../services/presenca.service');

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
async function marca_presenca(req, res) {
    let obj = await service.hello();
    res.status(400).send(obj);     
};


module.exports.marca_presenca = marca_presenca;


