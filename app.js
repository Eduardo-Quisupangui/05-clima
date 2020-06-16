//se crear la opcion con yargs que en esta ocacion colocamos c para 
//que asi colocar -c y el nombre de la cuidad 
const clima = require('./controlador/clima'); //para poder llamar al clima
const argv = require('yargs').options({
    ciudad: {
        alias: 'c',
        desc: "nombre de la ciudad",
        demand: true
    }
}).argv;

console.log(argv.ciudad);

//se crea otra funcion para poder mostrar la imformacion
const getInformacion = async(ciudad) => {
        try {
            const temp = await clima.getClima(argv.ciudad);
            return `el clima de ${ ciudad } es de ${ temp } grados `; //muestra la ciudad y la temperatura
        } catch (e) {
            return `no se pudo obtener el clima de la ${ ciudad }`; //al ingresar una cidad incorrecta 

        }
    }
    //imprimir los resultados
getInformacion(argv.ciudad)
    .then(console.log)
    .catch(console.log)