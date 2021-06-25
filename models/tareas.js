
    const Tarea = require('./tarea');

    class Tareas{

        _listado = {};

        constructor(){
            this._listado = {};
        }

        crearTarea( description = '' ){

            const tarea = new Tarea(description);
            
            this._listado[tarea.id] = tarea;
        }

    }

    module.exports = Tareas;