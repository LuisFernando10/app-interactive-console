
const fs = require('fs');

const guardarBD = ( data ) => {

    const file = './db/data.json';

    fs.writeFileSync( file, JSON.stringify( data) );
}

module.exports = {
    guardarBD
}