
require('colors');

const { 
    inquirerMenu, 
    pausa,
    leerInput 
} = require('./helpers/inquirer');
const { guardarBD } = require('./helpers/guardarArchivo');
const Tareas = require('./models/tareas');

const main = async() => {

    let option = '';
    const tareas = new Tareas(); //Instanciamiento

    do {
        // Imprimir el menú
        option = await inquirerMenu();
        
        switch( option ){

            case '1':
                
                // Recibir Tarea
                const description = await leerInput('Descripción: ');

                //Crear Tarea
                tareas.crearTarea( description );
            break;

            case '2':
                console.log( tareas.listadoArr );
            break;
        }

        guardarBD( tareas.listadoArr );

        await pausa();

    } while( option !== '0' );
}

main();