const bcrypt = require('bcrypt');
const Boom = require('boom');
const jwt = require('jsonwebtoken');
const db = require('../db');

const SALT_ROUNDS = 10;

const checkPassword = async (password, hashedPassword) => bcrypt.compare(password, hashedPassword);

const logIn = async ({ email, password }) => {
  try {
    await db.query('BEGIN');
    const query = 'SELECT * FROM users WHERE email = ($1)';
    const values = [email];
    const { rows } = await db.query(query, values);
    if (rows.length === 0) {
      throw Boom.notFound(`No user found with email ${email}`);
    }
    const [user] = rows;
    const hasCorrectPassword = await checkPassword(password, user.password);
    if (!hasCorrectPassword) {
      throw Boom.badData('Incorrect password');
    }
    const token = await jwt.sign({ email }, process.env.SECRET_TOKEN_STRING, {
      expiresIn: '1h',
    });
    return Object.assign({}, { id: user.id }, { token });
  } catch (e) {
    await db.query('ROLLBACK');
    throw Boom.boomify(e);
  }
};

const createUser = async ({ email, password }) => {
  try {
    const hashPass = await bcrypt.hash(password, SALT_ROUNDS);
    await db.query('BEGIN');
    const query = 'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id';
    const values = [email, hashPass];
    const { rows } = await db.query(query, values);
    await db.query('COMMIT');
    return rows;
  } catch (e) {
    await db.query('ROLLBACK');
    throw new Error(e);
  }
};

module.exports = {
  createUser,
  logIn,
};
