//importar la libreria instalada de axios
const axios = require('axios');

//funcion para obtener el clima 
//se realiza una funcion async para el retardo que pueda tener al llamar una peticion
const getClima = async(ciudad) => { //parametro la ciudad que necesite consultar
    const ciudadURL = encodeURI(ciudad); //para codificar la paralbra como Buenos Aires para hacer la peticion get
    //colocamos la url para hacer la peticion de la ciudad
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${ ciudadURL }&appid=56c9e24af341c0a3036daaf10f228fd7&units=metric`)
        //.data.main.temp.pressure.humidity   presion , humedad
        //let datos = 
    return [resp.data.main.temp, resp.data.main.pressure, resp.data.main.humidity]; //me debuelve la temperatura de la ciudad
}


//exportamos la funcion del clima
module.exports = {
    getClima,
}