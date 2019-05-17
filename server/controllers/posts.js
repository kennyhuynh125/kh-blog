const db = require('../db');

const getPosts = async () => {
  try {
    await db.query('BEGIN');
    const query = 'SELECT * FROM posts';
    const { rows } = await db.query(query);
    await db.query('COMMIT');
    return rows;
  } catch (e) {
    await db.query('ROLLBACK');
    throw new Error(e);
  }
};

const getPost = async ({ id }) => {
  if (!id) {
    throw new Error('No id specified');
  }
  try {
    await db.query('BEGIN');
    const query = 'SELECT * FROM posts WHERE id = ($1)';
    const values = [id];
    const { rows } = await db.query(query, values);
    await db.query('COMMIT');
    return rows;
  } catch (e) {
    await db.query('ROLLBACK');
    throw new Error(e);
  }
};

const updatePost = async ({ id, title, content } = {}) => {
  if (!id) {
    throw new Error('No id specified');
  }
  try {
    await db.query('BEGIN');
    const query = 'UPDATE posts SET title = ($1), content = ($2) WHERE id = ($3) RETURNING *';
    const values = [title, content, id];
    const { rows } = await db.query(query, values);
    await db.query('COMMIT');
    return rows;
  } catch (e) {
    await db.query('ROLLBACK');
    throw new Error(e);
  }
};

const deletePost = async ({ id }) => {
  if (!id) {
    throw new Error('No id specified');
  }
  try {
    await db.query('BEGIN');
    const query = 'DELETE FROM posts where id = ($1)';
    const values = [id];
    const { rows } = await db.query(query, values);
    await db.query('COMMIT');
    return rows;
  } catch (e) {
    await db.query('ROLLBACK');
    throw new Error(e);
  }
};

const createPost = async ({ content, title, userId }) => {
  if (!title) {
    throw new Error('No title specified');
  }

  if (!content) {
    throw new Error('No content specified');
  }

  if (!userId) {
    throw new Error('No userId specified');
  }

  try {
    await db.query('BEGIN');
    const query = 'INSERT INTO posts (title, content, user_id) VALUES ($1, $2, $3) RETURNING *';
    const values = [title, content, userId];
    const { rows } = await db.query(query, values);
    await db.query('COMMIT');
    return rows;
  } catch (e) {
    await db.query('ROLLBACK');
    throw new Error(e);
  }
};


module.exports = {
  createPost,
  deletePost,
  getPost,
  getPosts,
  updatePost,
};
