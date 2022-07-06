const env = process.env;
/*
const config = {
  db: { 
    host: env.DB_HOST || 'mysqlgao.eastus.cloudapp.azure.com', //localhost
    user: env.DB_USER || 'root',
    password: env.DB_PASSWORD || '!QAZ1qaz', //waterfall
    database: env.DB_NAME || 'test',
    waitForConnections: true,
    connectionLimit: env.DB_CONN_LIMIT || 2,
    queueLimit: 0,
    debug: env.DB_DEBUG || false
  },
  listPerPage: env.LIST_PER_PAGE || 10,
};
*/

const config = {
    db: { 
      port: '3306',
      host: "hybridtest.eastus.cloudapp.azure.com", //localhost
      user: "admin",
      password: "password1", 
      database: "test",
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
      debug: env.DB_DEBUG || false
    },
    listPerPage: env.LIST_PER_PAGE || 10,
  };
  

module.exports = config;