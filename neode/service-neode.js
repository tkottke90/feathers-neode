// Implement Feathers Common API 
// https://docs.feathersjs.com/api/databases/common

const errors = require('@feathersjs/errors');
const { AdapterService } = require('@feathersjs/adapter-commons');


class Service extends AdapterService {
    constructor(options) {
        if (!options.Model) {
            throw new Error('You must provide a Neode Model');
        }

        super(options);
    }

    

}