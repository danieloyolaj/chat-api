//Dependencies
require('dotenv').config()

const config = {
    port: process.env.PORT || 9003,
    nodeEnv: process.env.NODE_ENV || 'development', //Development, Testing, Production
    jwtSecret: process.env.JWT_SECRET,
    host: process.env.HOST || 'http://localhost:9003',
    db: {
        host: process.env.DB_HOST || 'localhost',
        username: process.env.DB_USER || 'postgres',
        password: process.env.DB_PASSWORD || 'root',
        dbName: process.env.DB_NAME || 'chat_api'

    }
}

module.exports = config