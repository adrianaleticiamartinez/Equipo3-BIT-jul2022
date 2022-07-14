advisersController = {};
const Adviser = require('../models/Advisers.model');

/* QUERY TO GET ALL ADVISER */
advisersController.getAdvisers = async (req, res) => {
    const advisers = await Adviser.find();
    res.json(advisers);
}

/* QUERY TO FIND ADVISER BY ID */
advisersController.getAdviser = async (req, res) => {
    const query = { usuario: req.params.id };
    const adviser = await Adviser.findOne( query );
    res.json(adviser);
}

advisersController.loginAdviser = async (req, res) => {
    const adviser = await Adviser.findOne({usuario: req.body.usuario , auth: req.body.auth });
    if(adviser){
        res.json(adviser);
    }else{
        res.json({message: 'Adviser not registred'});
    }
}

module.exports = advisersController;