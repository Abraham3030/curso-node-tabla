
const fs = require('fs');
const colors = require('colors');

// retorna una promesa volviendo la funcion async
// colocamos un try catch para poder atrapar errores
// se puede crear otra funcion que devuelva una promesa con 
/**
 * return new Promise( (resolve, reject) => {
 *      console.log('==================');
 *      console.log(`  Tabla del ${ base }`);
 *      console.log('==================');
 *      let salida = '';
 *      for(let i = 1; i<=10 ; i++){
 *          salida += `${base} X ${i} = ${i*base}\n`;
 *      }
 *      console.log(salida);
 *      fs.writeFileSync( `tabla-${ base }.txt`, salida);
 *      resolve `tabla-${ base }.txt creado`;
 * })
 * Pero tavia no manejamos la exepcion del reject
 * Es mejor utilizar async await para utilizar promesas
*/

// Clase 31 Importar archivos de nuestro proyecto
/**
 * Utilizamos una promesa para recibi
 * 
 */
const crearArchivo = async ( base = 6, listar = false, hasta = 10 ) => {
    
    // Se utiliza try para reemplazar al reject de new Promise
    try{
        
        let salida, consola = '';

        for(let i = 1; i<=hasta ; i++){
            salida += `${base} x ${i} = ${i*base}\n`;
            consola += `${base} ${'x'.green} ${i} ${'='.green} ${i*base}\n`;
        }
        //console.log(salida);
        // con este if ya podemos contralar cosas que queremos 
        // mostrar mediante comandos node app -b 8 -l 
        // -l muestra el siguiente codigo del if
        if( listar ){
            console.log('=================='.green);
            console.log('  Tabla del:'.green, colors.blue(base));
            console.log('=================='.green);

            console.log(consola);
        }
    /*
    // Estructura fs.writeFile
    fs.writeFile( `tabla-${ base }.txt`, salida, ( err ) => {
        if ( err ) throw err;
        
        console.log(`tabla-${ base }.txt creado`);
    });
    */
    
        // Estructura fs.writeFileSync este codigo no tiene try catch para atrapar el error

        /**
         * Clase 39 ruta para guardar los archivos txt
         * Directorio salida
         * ./salida/tabla
         */
        fs.writeFileSync( `./salida/tabla-${ base }.txt`, salida);
        // console.log(`tabla-${ base }.txt creado`);
        return `tabla-${ base }.txt creado`;
    } catch( err ){
        throw err
    }
}

module.exports = {
    crearArchivo
}