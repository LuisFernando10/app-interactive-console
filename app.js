
require('colors');

const { inquirerMenu, pausa } = require('./helpers/inquirer');

console.clear();

const main = async() => {

    let option = '';

    do {
        option = await inquirerMenu();
        console.log({ option });

        await pausa();

    } while( option !== '0' );
}

main();