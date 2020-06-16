//se crear la opcion con yargs que en esta ocacion colocamos c para 
//que asi colocar -c y el nombre de la cuidad
const colors = require('colors');
const clima = require('./controlador/clima'); //para poder llamar al clima
const argv = require('yargs').options({
    ciudad: {
        alias: 'c',
        desc: "nombre de la ciudad",
        demand: true
    },
    op: {
        alias: 'o',
        desc: "opciones de presion y humedad",

    },
    humedad: {
        alias: 'h',
        desc: "humedad de la ciudad",

    }
}).argv;

//console.log("la ciudad consultada es: ", argv.ciudad);

//se crea otra funcion para poder mostrar la imformacion
const getInformacion = async(ciudad) => {
        try {
            const [temp, pressure, humidity] = await clima.getClima(argv.ciudad);

            if (argv.op === 'p') {
                console.log(colors.green("Presion Atmosferica"));
                return colors.blue(`El clima de ${ciudad } es de ${ temp } grados y una presion ${ pressure }`);
            } else {
                if (argv.op === 'h') {
                    console.log(colors.green("Humedad"));
                    return colors.red(`El clima de ${ ciudad } es de ${ temp } grados y una humedad ${ humidity }`);
                } else {
                    console.log(colors.green("Temperatura"));
                    return colors.yellow(`El clima de ${ ciudad } es de ${ temp } grados`);
                }
            }
            //return `el clima de ${ ciudad } es de ${ temp } grados ${ pressure }. ${humidity}`; //muestra la ciudad y la temperatura
        } catch (e) {
            return `No se pudo obtener el clima de la ciudad de ${ ciudad }`; //al ingresar una cidad incorrecta 

        }
    }
    //imprimir los resultados
getInformacion(argv.ciudad)
    .then(console.log)
    .catch(console.log)