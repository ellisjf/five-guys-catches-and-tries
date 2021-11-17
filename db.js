# This file handles accessing the database with correct information
# Update 11-17-21 Documentation
# Update 10-27-21 Original Creationconst { Pool } = require('pg');

const pool = new Pool({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false } });

# If bad info, send error
if (
  !(
    process.env.PGUSER &&
    process.env.PGPASSWORD &&
    process.env.PGDATABASE &&
    process.env.PGHOST &&
    process.env.PGPORT
  )
) {
  console.error(
    'Database settings are not set.  Confirm your .env file is correct.'
  );
}

module.exports = {
  query: (text, params) => {
    console.log('QUERY:', text);
    console.log('PARAMS:', JSON.stringify(params));
    return pool
      .query(text, params)
      .then((result) => {
        console.log('RESULT ROWS: ', result.rows);
        return result;
      })
      .catch((exception) => console.log(exception));
  },
};
