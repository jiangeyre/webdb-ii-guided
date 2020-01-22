const express = require('express');
const knex = require('knex');

const knexConfig = {
  // client answers: which type (sqlite, postgres, mysql, oracle) of databases?
  client: 'sqlite3', // the db driver
  // the rest will depend on the type of database
  // connection could be a string or an object
  connection: {
    filename: './data/produce.db3'
  },
  useNullAsDefault: true, // ONLY needed for SQLite 
};

// db represents a connection to the database
const db = knex(knexConfig);

// const db = knex({
//   client: 'sqlite3',
//   connection: {
//     filename: './data/produce.db3'
//   },
//   useNullAsDefault: true
// });

const router = express.Router();

router.get('/', (req, res) => {
  // select * from fruits
  // db.select(*).from('fruits').then().catch();

  db('fruits')
  .then(fruits => {
    res.json(fruits); 
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to retrieve fruits' });
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  // select * from fruits where id = 2

  // db('fruits')
  //   .where({ id: id })
  //   .where('id', '=', id)
  //   .first()
  db('fruits').where({ id }).first()
  .then(fruit => {
    res.json(fruit);
  }) 
  .catch (err => {
    res.status(500).json({ message: 'Failed to retrieve fruit' });
  });
});

router.post('/', (req, res) => {
  const fruitData = req.body;
  db('fruits').insert(fruitData) // with SQLite, by default it returns an array with the last ID
  .then(ids => {
    db('fruits').where({ id: ids[0] })
    .then(newFruitEntry => {
      res.status(201).json(newFruitEntry);
    });
  })
  .catch (err => {
    console.log('POST error', err);
    res.status(500).json({ message: "Failed to store data" });
  });
});

module.exports = router;