const mongoClient = require("mongodb").MongoClient;

const uri = "mongodb+srv://mongo:mongobd@cluster0.frxx0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const client = mongoClient.connect(uri, {useUnifiedTopology: true }, (error, connection) => {
    if (error) {
        console.log("falha na conexão");
        return;
    }
    global.connection = connection.db("aula");
    console.log("conectou!");
});

module.exports = {}; 