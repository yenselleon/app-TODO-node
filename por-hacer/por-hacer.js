const fs = require('fs');


let listadoPorHacer = [];

const getListado = () => {

    cargarDB();

    return listadoPorHacer;

};

const guardarDB = () => {

    return new Promise ((resolve, reject ) => {

        let data = JSON.stringify(listadoPorHacer);
    
        fs.writeFile(`./db/db.json`, data, (err) => {
            if (err) 
                reject(err);
            else
                resolve(`DB actualizada`);
        });

    });
};

const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/db.json');
    } catch (error) {
        listadoPorHacer = [];
    }
    

};

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push(porHacer);

    guardarDB()
            .then(mensaje => console.log(mensaje))
            .catch(error => console.log(error));

    return porHacer;
};

const actualizarDB = (descripcion, completado = true) => {

    cargarDB();

    let positionTask = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (positionTask >= 0) {

        listadoPorHacer[positionTask].completado = completado;

        guardarDB()
            .then(mensaje => console.log(mensaje))
            .catch(error => console.log(error));

        return true;

    }else{
        return false;
    }

};

const borrarTarea = (descripcion) => {

    cargarDB();

    let positionTask = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    delete listadoPorHacer[positionTask];

    let filtrarNull = listadoPorHacer.filter(tarea => tarea !== null && tarea !== undefined);

    listadoPorHacer = filtrarNull;
    guardarDB()
            .then(mensaje => console.log(mensaje))
            .catch(error => console.log(error));

    return `tarea "${descripcion}" elimnada`;
};

module.exports = {
    crear,
    getListado,
    actualizarDB,
    borrarTarea
};