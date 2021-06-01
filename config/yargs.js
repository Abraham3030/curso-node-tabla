// Clase 36 Configuraciones de yargs independiente
/**
 * al consultar el comando node app --help 
 * muestra la descripcion de la opcion base y listar
 * Opciones:
 *     --help     Muestra ayuda                                        [booleano]     
 *     --version  Muestra número de versión                            [booleano]     
 * -b, --base     Es la base de la tabla de multiplicar      [número] [requerido]     
 * -l, --listar   Muestra la tabla en consola         [booleano] [defecto: false]  
 *  
 * Para esto solo se agrego el campo describe en cada .option
 */
//Clase 37 Tabla hasta X numero

const { number } = require('yargs');

/**
 * Debemos crear una nueva opcion --hasta -h
 * para poner hasta donde quieres que llegue la tabla de multiplicr
 */
const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base de la tabla de multiplicar'
                })
                .option('l', {
                    alias: 'listar',
                    type:'boolean',
                    default: false,
                    describe: 'Muestra la tabla en consola'
                })
                .option('h', {
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    describe: 'Numero hasta donde quieres que llegue la multiplicación'
                } )
                .check( (argv, options) => {
                    if( isNaN( argv.b )){
                        throw 'La base tiene que ser un número'
                    }
                    return true;
                } )
                .argv;
module.exports = argv;
