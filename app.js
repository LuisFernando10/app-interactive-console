
require('colors');

const { mostrarMenu, pausa } = require('./helpers/mensajes');

console.clear();

const main = async() => {

    let option = '';

    do {
        option = await mostrarMenu();
        if ( option !== '0' ) await pausa();
    } while( option !== '0' );

    //pausa();
}

main();