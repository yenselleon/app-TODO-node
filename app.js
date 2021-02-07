let argv = require('./config/yargs').argv;
let color = require('colors');
let crear = require('./por-hacer/por-hacer');
let getListado = require('./por-hacer/por-hacer');
let actualizarDB = require('./por-hacer/por-hacer');
let borrarItem = require('./por-hacer/por-hacer');

let comandos = argv._[0];


switch (comandos) {
    case "listar":
        
        let listado = getListado.getListado();

        for (let tarea of listado) {
            console.log('===========Por Hacer==========='.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('==============================='.green);
        }
        break;
    case "crear":
        crear.crear(argv.descripcion);
        break;
    case "actualizar":
        let actualizar = actualizarDB.actualizarDB(argv.descripcion, argv.completado);
        console.log(actualizar);
        break;
    case "borrar":
        let borrar = borrarItem.borrarTarea(argv.descripcion);
        console.log(borrar);
        break;

    default: 
        console.log("comando no reconocido");
        break;
}

