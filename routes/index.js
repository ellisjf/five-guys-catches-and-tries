/* eslint-disable max-len */
const express = require('express');
const db = require('../db');

const router = express.Router();
let rn = false;
let rt = true;
let rr = true;
let rp = true;

// Home page
router.get('/', async (req, res) => {
  let query = 'SELECT * FROM restaurants';
  const params = [];

  if (req.query.name) {
    query += ' WHERE name ILIKE $1';
    params.push('%' + req.query.name + '%');
  } else if (req.query.type) {
    query += ' WHERE type ILIKE $1';
    params.push('%' + req.query.type + '%');
  } else if (req.query.rating) {
    query += ' WHERE rating >= $1';
    params.push(req.query.rating);
  } else if (req.query.minPrice) {
    query += ' WHERE price ILIKE $1';
    params.push('%' + req.query.minPrice + '%');
  } else if (req.query.maxPrice) {
    query += ' WHERE NOT price ILIKE $1';
    params.push('%' + req.query.maxPrice + '%');
  }


  if (req.query.sort === 'name') {
    if (rn === true) {
      query += ' ORDER BY name';
    } else {
      query += ' ORDER BY name DESC';
    }
    rn = !rn;
  } else if (req.query.sort === 'type') {
    if (rt === true) {
      query += ' ORDER BY type';
    } else {
      query += ' ORDER BY type DESC';
    }
    rt = !rt;
  } else if (req.query.sort === 'rating') {
    if (rr === true) {
      query += ' ORDER BY rating';
    } else {
      query += ' ORDER BY rating DESC';
    }
    rr = !rr;
  } else if (req.query.sort === 'price') {
    if (rp === true) {
      query += ' ORDER BY price';
    } else {
      query += ' ORDER BY price DESC';
    }
    rp = !rp;
  } else {
    query += ' ORDER BY name';
  }

  const result = await db.query(query, params);
  res.render('index', { title: 'Shoes', rows: result.rows });
});

router.get('/create', (req, res) => {
  res.render('new-restaurant');
});

router.post('/', async (req, res) => {
  const query = 'INSERT INTO restaurants (name, type, hours, price, rating, menu) VALUES ($1, $2, $3, $4, $5, $6)';
  const parameters = [
    req.body.name,
    req.body.type,
    req.body.hours,
    req.body.price,
    req.body.rating,
    req.body.menu,
  ];

  await db.query(query, parameters);

  res.render('new-restaurant-result', { parameters});
});

// Show an individual restaurants's edit form and delete button
router.get('/edit/:id', async (req, res) => {
  const query = 'SELECT id, name, type, hours, price, rating, menu FROM restaurants WHERE id = $1;';
  const parameters = [
    req.params.id,
  ];

  const result = await db.query(query, parameters);

  res.render('edit-restaurant-form', { restaurants: result.rows[0], parameters });
});

// Update an individual restaurant
router.post('/edit/:id', async (req, res) => {
  const query = 'UPDATE restaurants SET name = $1, type = $2, hours = $3, price = $4, rating = $5, menu = $6 WHERE id = $7';
  const parameters = [
    req.body.name,
    req.body.type,
    req.body.hours,
    req.body.price,
    req.body.rating,
    req.body.menu,
    req.params.id,
  ];

  await db.query(query, parameters);

  res.render('edit-customer-result', { query, parameters});
});

// Delete a restaurant record
router.post('/edit/:id/delete', async (req, res) => {
  const query = 'DELETE FROM restaurants WHERE id = $1';
  const parameters = [
    req.params.id,
  ];

  await db.query(query, parameters);

  res.render('delete-customer-result', { query, parameters });
});

router.get('/admin', async (req, res) => {
  const query = 'SELECT * FROM screening';
  const result = await db.query(query);

  res.render('admin', { rows: result.rows });
});

module.exports = router;
