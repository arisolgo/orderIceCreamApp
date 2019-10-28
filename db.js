const db = require('mongoose');
db.Promise = global.Promise
//mongodb+srv://db_user_ariel:S4V3USjaqABcdFwg@cluster0-qobz3.mongodb.net/orderIceCreamApp

async function connect(url){ //Al hacer esta funcion asincrona nos aseguramos de que siempre que se muestre esto se ha conectado correctamente
    await db.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
console.log('[db] Conectada con éxito');

}

module.exports = connect;
//funcion principal del archivo
