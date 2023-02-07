import Sequelize, { Model } from 'Sequelize';

export default class Cliente extends Model {
    static init(sequelize) {
        super.init({
            nome: Sequelize.STRING,
            instagram: Sequelize.STRING,
            email: Sequelize.STRING,
            nascimento: Sequelize.DATE,
            telefone: Sequelize.STRING,
        }, {
            sequelize,
        })
    }
}