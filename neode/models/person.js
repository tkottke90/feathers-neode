'use strict'

// Module: User

module.exports = {
    id: {
        primary: true,
        type: 'uuid',
        required: true,
    },
    first_name: {
        type: 'name',
        required: true,
    },
    last_name: {
        type: 'name',
        required: true,
    },
    age: 'number',
    username: {
        type: 'string',
        email: true,
        required: true,
    },
    password: {
        type: 'string',
        required: true,
    },
    createdAt: {
        type: 'datetime',
        required: true
    },
    updatedAt: {
        type: 'datetime',
        required: true
    }
}