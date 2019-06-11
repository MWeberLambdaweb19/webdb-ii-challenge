const knex = require ('knex');
const knexConfig = {
    client: 'sqlite3',
    connection: {
        filename: './data/lambda.db3'
    },
    useNullAsDefault: true
}

const db = knex(knexConfig);

module.exports = {
    find,
    findById,
    add,
    update,
    remove,
}

function find() {
    return db('zoos');
}

function findById(id) {
    return db('zoos').where({id}).first();
} 

function add(role) {
    return db('zoos')
    .insert(role)
    .then(ids => {
        const [id] = ids;
        return db('zoos')
        .where({id})
        .first()
    })
}

function update(id, changes) {
    return db('zoos')
    .where({id})
    .update(changes)
    .then(() => {
        return db('zoos')
        .where({id})
        .first()
    })
}

function remove(id) {
    return db('zoos')
    .where({id})
    .delete();
}