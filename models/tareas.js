
    require('colors');
    const Tarea = require('./tarea');

    class Tareas{

        _listado = {};

        // Transformar Objeto en Arreglo
        get listadoArr() {

            const listado = [];
            Object.keys(this._listado).forEach( key => {
                listado.push( this._listado[key] );
            });

            return listado;
        };

        constructor(){
            this._listado = {};
        }

        cargarTareasFromArray( tareas = [] ){

            tareas.forEach( tarea => {
                this._listado[tarea.id] = tarea;
            })
        }

        crearTarea( description = '' ){

            const tarea = new Tarea(description);
            this._listado[tarea.id] = tarea;
        }

        listadoCompleto() {

            console.log();//Salto línea
            
            this.listadoArr.forEach( (tarea, index) => {

                const counter_item = `${ index + 1 }`.green;
                const { description, completedIn } = tarea;
                const status = ( completedIn )
                                ? 'Completada'.green
                                : 'Pendiente'.red;

                console.log( `${ counter_item }. ${ description } :: ${ status }`);
            })
        }

    }

    module.exports = Tareas;