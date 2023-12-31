// je require les variables d'environemment avec dotenv
require('dotenv').config();

//je require le module sequelize
const {Sequelize} = require('sequelize');

//j'etablis la connexion a la bdd "postgres" a vec l'URL de ma bdd qui se trouve dans mon fichier .env par securite
const sequelize = new Sequelize(process.env.PG_URL, {
    dialect: "postgres",
    define: {
        createdAt:"created_at",//createdAt dans Sequeliaze = created_at dans ma bdd
        updatedAt:"updated_at",//updatedAt dans sequelize = updated_at dans ma bdd
    }
});

//j'exporte le fichier pour le rendre accessible
module.exports = sequelize;


// version julien
// on se connecte à la BDD
//const { Client } = require('pg');

//const connectionString = process.env.PG_CONNECTION_STRING;

//const client = new Client({
  //connectionString,
//});

//client.connect();

// on met à disposition du reste de l'application le client connecté
//module.exports = client;
