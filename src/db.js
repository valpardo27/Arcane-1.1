import { Pool } from 'pg';

const pool = new Pool({
  user: 'apple',
  database: 'postgres',
  password: 'apqazxsw110197%',
  port: 5432,
  host: 'dbarcane.postgres.database.azure.com',
  ssl:{ca:fs.readFileSync(path.resolve(__dirname, 'BaltimoreCyberTrustRoot.crt.pem'))}
})

export default { pool };

