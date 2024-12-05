// module.exports = Object.freeze({
//     DB_HOST : 'YOUR-DATABASE-ENDPOINT.ap-south-1.rds.amazonaws.com',
//     DB_USER : 'admin',
//     DB_PWD : 'YourPassword',
//     DB_DATABASE : 'webappdb'
// });

module.exports = Object.freeze({
    DB_HOST: process.env.DB_HOST || 'localhost',
    DB_USER: process.env.DB_USER || 'admin',
    DB_PWD: process.env.DB_PWD || 'password',
    DB_DATABASE: process.env.DB_DATABASE || 'webappdb',
});
