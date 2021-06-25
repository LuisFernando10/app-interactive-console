
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

        crearTarea( description = '' ){

            const tarea = new Tarea(description);

            this._listado[tarea.id] = tarea;
        }

    }

    module.exports = Tareas;