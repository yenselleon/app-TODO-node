let argv = require('yargs')
    .command('crear', 'crear un elemento por hacer', {
        descripcion :{
            demand: true,
            alias: "d",
            desc: "Descripcion de la tarea por hacer"
        }
    })
    .command('actualizar', 'actualizar el estado completado de una tarea', {
        descripcion :{
            demand: true,
            alias: "d",
            desc: "Descripcion de la tarea por hacer"
        },
        completado:{
            default: true,
            alias: "c",
            desc: "Marca como completado o pendiente la tarea"
        }
    })
    .command('borrar', 'Borrar tarea', {
        descripcion :{
            demand: true,
            alias: "d",
            desc: "Descripcion de la tarea por hacer"
        }
    })
    .help()
    .argv;


/*.command('listar', 'listar elementos por hacer', {
        descripcion :{
            demand: true,
            alias: l
        },
    })*/


module.exports = {
    argv
}