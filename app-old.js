
const http = require('http');

http.createServer((req, res) => {

    // res.writeHead(200, {'Content-Type': 'application/json'});
    // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    // res.writeHead(200, {'Content-Type': 'application/csv'});

    // const persona = {
    //     id: 1,
    //     nombre: 'Zenovio'
    // }

    // res.write(JSON.stringify(persona));
    // res.write('id, nombre\n');
    // res.write('1, Zenovio\n');
    // res.write('2, Juan\n');
    // res.write('3, Magencio\n');
    // res.write('4, Silvia\n');

    res.write('Hola Mundo!');
    res.end();

})
.listen(8080);

console.log('Escuchando el puerto: ', 8080);