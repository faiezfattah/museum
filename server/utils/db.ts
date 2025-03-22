import mysql from 'mysql2/promise'

let pool: mysql.Pool;

export default async function getConnection() {
  if (!pool) {
    pool = mysql.createPool({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'museum_indonesia',
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0
    })
  }
  return pool
}