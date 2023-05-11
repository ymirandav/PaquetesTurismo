const fs = require('fs');

const guardarCurso = ( data ) => {
    const archivo = './curso.txt';
    fs.writeFileSync( archivo, JSON.stringify(data) );

    // if(fs.existsSync(archivo)){
    //     console.log(JSON.stringify({result:new Boolean(true), msg:new String('OK')}))
    // }else{    
    //     console.log(JSON.stringify({result:new Boolean(false), msg:new String('ERROR')}))
    // }
}

module.exports = {
    guardarCurso
}