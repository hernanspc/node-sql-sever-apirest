import sql from "mssql";
import config from "../config";

export const dbSettings = {
  user: config.dbUser,
  password: config.dbPassword,
  server: config.dbServer,
  database: config.dbDatabase,
  options: {
    encrypt: true, // for azure
    trustServerCertificate: true, // change to true for local dev / self-signed certs
  },
};

export const getConnection = async (empresa) => {
  try {
    const pool = await sql.connect({
      user: config.dbUser,
      password: config.dbPassword,
      server: config.dbServer,
      database: `${empresa}`,
      options: {
        encrypt: true, // for azure
        trustServerCertificate: true, // change to true for local dev / self-signed certs
      },
    });
    // const pool = await sql.connect(...dbSettings, { database: value.toString() });
    // database: `${value}`,
    return pool;
  } catch (error) {
    console.error(error);
  }
};

export { sql };
