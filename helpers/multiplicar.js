const fs = require('fs');

const crearArchivo = async (base = 5, l = false, a = base) => {

    let salida = '';

    for (let i = base; i <= a; i++) {

        salida += '=================\n';
        salida += '  Tabla del: ' +i+'\n';
        salida += '=================\n';

        for (let j = 1; j <= 10; j++) {
            salida += `${i} x ${j} = ${i * j}\n`;
        }
    }

    try {
        if (l) { console.log(salida); }

        fs.writeFileSync(`salida/tablas-de_${base}-al_${a}.txt`, salida);

    } catch (error) {
        throw error;
    }

    return `tablas-de:${base}-al-${a}.txt creado`;
}

module.exports = {
    crearArchivo
};