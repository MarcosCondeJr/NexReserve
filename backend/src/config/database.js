const dotenv = require('dotenv');
const { underscoredIf } = require('sequelize/lib/utils');

dotenv.config();

module.exports = {
    dialect: process.env.DB_DIALECT,
    username: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    define: {
        timestamps: true,
        underscored: true
    }
};
