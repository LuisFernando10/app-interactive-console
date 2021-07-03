
    const { v4: uuiv4 } = require("uuid");

    class Tarea {

        id = '';
        description = '';
        completedIn = null;

        constructor( description ){

            this.id = uuiv4();
            this.description = description;
            this.completedIn = null;
        }
    }

    module.exports = Tarea;