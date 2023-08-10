//JULIAN
// on a besoin d'un client connecté à la base de données
// pour pouvoir intéragir avec elle
const client = require('./database');

// le datamapper est un objet qui 
const dataMapper = {
  findAllPromos: async () => {
     // on récupére la liste des promos depuis la base de données et     
     const promoResults = await client.query(
      `
      SELECT *
      FROM "promo"
      ORDER BY "name" ASC;
      `
    );

    // on les renvoie
    return promoResults.rows;
  },
  findOnePromo: async (id) => {
    const selectQuery = `
      SELECT *
      FROM "promo"
      WHERE "id" = ${id}
    `;

    // ici, on attend la réponse et on la renvoie sans
    // variable intermédiaire.
    const promoResults =  await client.query(selectQuery);

    if (promoResults.rowCount === 1){
      return promoResults.rows[0];
    }else{
      return null;
    }

  },
  findAllStudentsByPromo: async (promoId) => {
    // je prépare la requête permettant de récupérer 
    // tous les étudiants de la promo
    const sqlStudents = `
      SELECT * 
      FROM "student" 
      WHERE "promo_id" = ${promoId}
    `;

    const studentsResults = await client.query(sqlStudents);
    return studentsResults.rows;
  },
  findOneStudent: async (studentId) => {
    const sqlStudent = `
      SELECT *
      FROM "student"
      WHERE "id" = ${studentId}
    `;

    const studentResults = await client.query(sqlStudent);

    if (studentResults.rowCount === 1){
      return studentResults.rows[0];
    }else{
      return null;
    }
  },
  addStudent: async (studentData) => {

    console.log(studentData);

    // ATTENTION, ne jamais faire confiance aux données utilisateur
    // NTUI : Never Trust User Input !
    // En Effet, si un utilisteur saisi dans le champ prénom du formulaire la valeur suivante :
    // ', '', '', '', 303); DELETE FROM "student"; --
    // Alors le SQL transmis au SGBD sera :
    // INSERT INTO "student" ("first_name",  "last_name", "github_username", "profile_picture_url", "promo_id")
    // VALUES ('', '', '', '', 303); DELETE FROM "student"; --', '', '', '', 303);
    // Ainsi, on va procéder à l'ajout d'un étudiant
    // PUIS à la SUPPRESSION de TOUS les étudiants de la table "promo" !!

    // ON appelle ce type d'attaque une INJECTION SQL    ''

    // Pour s'en prémunir, on doit échapper les chaines de caractères pour être sûr qu'elle
    // ne "déborde pas de l'emplacement prévu".

    // Poir pallier à ce problème, on peut (on doit)
    // utiliser des requêtes paramétrées.

    const first_name = studentData.first_name;
    const last_name = studentData.last_name;
    const github_username = studentData.github_username;
    const profile_picture_url = studentData.profile_picture_url;
    const promo_id = studentData.promo_id;

    // on sépare ainsi la requête :
    const sqlInsertStudent = `
      INSERT INTO "student" ("first_name",  "last_name", "github_username", "profile_picture_url", "promo_id")
      VALUES ($1, $2, $3, $4, $5);
    `;

    // des valeurs à injecter
    const values = [ first_name,  last_name, github_username,  profile_picture_url, promo_id];

    // et on laisse le soin à query d'échapper les valeurs !
    const resultInsert = await client.query(sqlInsertStudent, values);

    // on fait remonter l'info au code appelant :
    // l'insertion s'est-elle bien passée.

    // ici, le client nous donne accès à une propriété rowCount dans le result
    // qui permet de savoir combien de lignes (d'enregistrements) ont effectivement été ajoutées.
    return (resultInsert.rowCount === 1);

    // équivalent à :
    /*
    if ((resultInsert.rowCount === 1)){
      return true;
    }else{
      return false;
    }
    */
  },
};

module.exports = dataMapper;