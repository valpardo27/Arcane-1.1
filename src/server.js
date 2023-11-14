import express from 'express';

const express = require('express');
const { Client } = require('pg');
const fs = require('fs');

const app = express();
const port = 8000;

const client = new Client({
    host:"dbarcane.postgres.database.azure.com", 
    user:"apple", 
    password:"apqazxsw110197%", 
    database:"postgres", 
    port:5432, 
    ssl:{ca:fs.readFileSync(path.resolve(__dirname, 'BaltimoreCyberTrustRoot.crt.pem'))}
});


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post('/saveData', async (req, res) => {
  const { name, email, pass, date } = req.body;

  try {
    const result = await client.query('INSERT INTO public.user (name, email, pass, date) VALUES ($1, $2, $3, $4) RETURNING id', [name, email, pass, date]);
    console.log(result.rows);
    res.send('Data saved correctly');
  } catch (error) {
    console.error('Error saving data:', error);
    res.status(500).send('Error al guardar datos.');
  }
});

app.get('/showData', async (req, res) => {
  try {
    const result = await client.query('SELECT * FROM user');
    res.json(result.rows);
  } catch (error) {
    console.error('Error retrieving data:', error);
    res.status(500).send('Error retrieving data,');
  }
});

app.listen(port, () => {
  console.log(`Server running in http://localhost:${port}`);
});

