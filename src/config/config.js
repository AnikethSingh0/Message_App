const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    salt_round : process.env.SALT_ROUND,
}