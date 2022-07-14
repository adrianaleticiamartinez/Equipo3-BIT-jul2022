customersController = {};
const Customer = require('../models/Customer.model');

/* QUERY TO GET ALL CUSTOMERS */
customersController.getCustomers = async (req, res) => {
    const customers = await Customer.find();
    res.json(customers);
}

/* QUERY TO FIND CUSTOMER BY ID */
customersController.getCustomer = async (req, res) => {
    const query = { idCliente: req.params.id };
    const customer = await Customer.findOne( query );
    res.json(customer);

}

customersController.getCusromerByAdviser = async (req, res) => {

    const adviser = {perfil: req.params.id}

    if(adviser.perfil == 'Restringido'){
        console.log('restringido');
    }else if (adviser.perfil == 'Supervisor'){
        console.log('supervisor');
    }else if (adviser.perfil == 'Manager'){
        console.log('manager');
    }
}

module.exports = customersController;