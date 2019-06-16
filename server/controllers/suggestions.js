const db = require('../db');

const createSuggestion = async ({ name, suggestion, suggestionType }) => {
  if (!name) {
    throw new Error('No name specified');
  }
  if (!suggestion) {
    throw new Error('No suggestion specified');
  }
  if (!suggestionType) {
    throw new Error('No suggestion type specified');
  }
  try {
    await db.query('BEGIN');
    const query = 'INSERT INTO suggestions (name, suggestion, suggestion_type) VALUES ($1, $2, $3) RETURNING *';
    const values = [name, suggestion, suggestionType];
    const { rows } = await db.query(query, values);
    await db.query('COMMIT');
    return rows;
  } catch (e) {
    await db.query('ROLLBACK');
    throw new Error(e);
  }
};

const deleteSuggestion = async ({ id }) => {
  if (!id) {
    throw new Error('No id specified');
  }
  try {
    await db.query('BEGIN');
    const query = 'DELETE FROM suggestions WHERE id = ($1) RETURNING *';
    const values = [id];
    const { rows } = await db.query(query, values);
    await db.query('COMMIT');
    return rows;
  } catch (e) {
    await db.query('ROLLBACK');
    throw new Error(e);
  }
};

const getSuggestions = async () => {
  try {
    await db.query('BEGIN');
    const query = 'SELECT * FROM suggestions';
    const { rows } = await db.query(query);
    await db.query('COMMIT');
    return rows;
  } catch (e) {
    await db.query('ROLLBACK');
    throw new Error(e);
  }
};

module.exports = {
  createSuggestion,
  deleteSuggestion,
  getSuggestions,
};
