
require('colors');

const { 
    inquirerMenu, 
    pausa,
    leerInput, 
    listadoTareasBorrar,
    confirmar
} = require('./helpers/inquirer');
const { guardarBD, leerDB } = require('./helpers/guardarArchivo');
const Tareas = require('./models/tareas');

const main = async() => {

    let option = '';

    //Instanciamientos
    const tareas = new Tareas();
    const tareasLeerDB = leerDB();

    if( tareasLeerDB ){ // Cargar tareas
        tareas.cargarTareasFromArray( tareasLeerDB );
    }

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
                tareas.listadoCompleto();
            break;

            case '3':
                tareas.listarPendientesCompletadas( true );
            break;

            case '4':
                tareas.listarPendientesCompletadas( false );
            break;

            case '6':
                const id = await listadoTareasBorrar( tareas.listadoArr );
                if( id !== '0' ){
                    const confirm_delete = await confirmar( '¿Está seguro?' );
                    if( confirm_delete ){
                        tareas.borrarTarea( id );
                        console.log('Tarea eliminada correctamente.');
                    }
                }
            break;
        }

        guardarBD( tareas.listadoArr );

        await pausa();

    } while( option !== '0' );
}

main();