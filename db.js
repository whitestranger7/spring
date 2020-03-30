const sequelize = require('./sequelize');
require('./models/User');

const dbInit = async () => {
    try {
        // await sequelize.sync({
        //     logging: console.log,
        //     force: true
        // });
        await sequelize.authenticate();
        console.log('DB working fine');
    } catch (error) {
        console.log('DB is broken');
    }
};

dbInit();