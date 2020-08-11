require('dotenv').config();

const options = {
    query: e => {
        if (process.env.NODE_ENV === 'dev') {
            console.log(e.query);
        };
    },
};

const pgp = require('pg-promise')(options);

module.exports = pgp({
    database: 'fitpals',
    port: 5432,
    host: 'localhost',
});
