require('dotenv').config();
require('./database');
const app = require('./app');

/* MAIN FUNCTION */
async function main(){
    await app.listen(app.get('port'));
    console.log(`Server on Port ${app.get('port')}`)
}

/* INIT SERVER */
main();

