import Sequelize from 'sequelize';
import databaseConfig from '../config/database.js';
import Cliente from '../models/Cliente.js'
import User from '../models/User.js'

const models = [Cliente, User];

const connection = new Sequelize(databaseConfig)

models.forEach((model) => model.init(connection));