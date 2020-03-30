const Sequelize = require('sequelize');
const sequelize = require('../sequelize');

const userSchema = {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    username: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
        validate: {
            len: [3, 32]
        }
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: [4, 32],
            customValidation(value) {
                if(value.search(/[a-zA-Z]/) === -1 || value.search(/[0-9]/) === -1) {
                    throw new Error('password must contains at least 1 letter and 1 number');
                };
            }
        }
    },
    firstName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: [3, 32]
        }
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: [3, 32]
        }
    },
    age: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            not: '0'
        }
    }
};

module.exports = sequelize.define('user', userSchema);