import {Sequelize} from "sequelize";
import 'dotenv/config';
import config from "./config";

const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    {
        host: config.host,
        dialect: config.dialect,
    }
);

module.exports = sequelize;