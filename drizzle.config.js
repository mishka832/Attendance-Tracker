export default {
    schema: "./utils/schema.js", // Path to your schema
    dialect: "mysql",            // Specify the database type            // Database driver (optional, but you already included it)
    dbCredentials: {
        host: "srv1118.hstgr.io",
        user: "u842762944_attendance",
        database: "u842762944_attendance",
        password: 'MishkaRaheja3',            // Make sure this is filled in if needed
        port: 3306               // Port should be a number, not a string
    }
};
