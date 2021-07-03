
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

        borrarTarea( id = '' ){

            if( this._listado[id] ){
                delete this._listado[id];
            }
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

                const counter_item = `${ index + 1 }.`.green;
                const { description, completedIn } = tarea;
                const status = ( completedIn )
                                ? 'Completada'.green
                                : 'Pendiente'.red;

                console.log( `${ counter_item } ${ description } :: ${ status }`);
            })
        }

        listarPendientesCompletadas( completadas = true ) {

            let counter_item = '1';

            console.log();//Salto línea
            
            this.listadoArr.forEach( tarea => {
                
                const { description, completedIn } = tarea;
                const counter_item_color = `${counter_item}.`.green;
                const status = ( completedIn )
                                ? 'Completada'.green
                                : 'Pendiente'.red;

                if ( completadas === true && completedIn !== null){
                    console.log( `${ counter_item_color } ${ description } :: ${ status } (${ completedIn })`);
                    counter_item++;
                }
                else if ( completadas == false && completedIn === null){
                    console.log( `${ counter_item_color } ${ description } :: ${ status }`);
                    counter_item++;
                }
            })
        }

        toggleCompletadas( ids = [] ){

            ids.forEach( id => {

                const tarea = this._listado[id];
                if( !tarea.completedIn ){
                    tarea.completedIn = new Date().toISOString();
                }
            });

            this.listadoArr.forEach( tarea => {
                
                if( !ids.includes(tarea.id) ){
                    this._listado[tarea.id].completedIn = null;
                }
            });
        }
    }

    module.exports = Tareas;