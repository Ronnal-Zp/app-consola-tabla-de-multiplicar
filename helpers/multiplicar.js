const fs = require('node:fs');
const colors = require('colors');


const multiplicar = async ( base = 5, listar = false, list = 10 ) => {
    
    try {
        let salida = ''
        let plainText = '';
        let x = colors.red('x')

        for (let i = 1; i <= list; i++) {
            salida += `${base} ${x} ${i} = ${base * i} \n`;
            plainText += `${base} x ${i} = ${base * i} \n`;
        }

        fs.writeFileSync(`./tablas/tabla-del-${base}.txt`, plainText);
        

        if(listar) {
            console.log(colors.grey("===================="));
            console.log(`   Tabla del `, base);
            console.log(colors.grey("==================== \n"));
            console.log(salida);
        }

        return `Tabla-del-${base} creado con exito`.brightBlue;
    } catch (error) {
        throw error;
    }
    

}



module.exports = {
    multiplicar
}