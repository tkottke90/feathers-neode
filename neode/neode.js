'use strict'
const Neode = require('neode');
const fileSystem = require('fs');

module.exports = (app) => {
    const { url, username, password } = app.get('neode');
    
    if (!url || !username || !password) {
        console.error('Missing Neo4j');
        throw Error('Missing Neo4j Configuration');
    }
    
    const neode = new Neode(
        url,
        username,
        password
    );

    if (!fileSystem.existsSync(__dirname + '/models')){
        console.error('Missing Models');
        throw Error('No Models Found');
    }

    app.set('neode', neode);

    neode.withDirectory(__dirname + '/models');
}