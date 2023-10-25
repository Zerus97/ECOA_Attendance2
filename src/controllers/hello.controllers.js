const service = require('../services/hello.service');

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
async function hello_world(req, res) {
    let obj = await service.hello();
    res.status(400).send(obj);     
};


module.exports.hello_word = hello_world;


