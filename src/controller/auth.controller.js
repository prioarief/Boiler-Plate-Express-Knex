const knex = require('../config/db')
module.exports = {
    register: async(req, res) => {
        const data = await knex.select().table('admin')
        console.log(data)
    }
}