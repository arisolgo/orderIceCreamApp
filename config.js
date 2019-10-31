const config ={
    dbUrl:process.env.DB_URL || 'mongodb+srv://db_user_ariel:S4V3USjaqABcdFwg@cluster0-qobz3.mongodb.net/orderIceCreamApp',
    port: process.env.PORT || 4000,
    host: process.env.HOST || 'http://localhost',
    secret: process.env.SECRET || 'supersecret',
}
module.exports = config;