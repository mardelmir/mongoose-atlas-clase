const mongoose = require('mongoose')
require('dotenv').config() // para poder leer process.env

const dbConnection = async () => {
    try {
        const mongoUri = process.env.MONGO_URI
        console.log(mongoUri);
        
        await mongoose.connect(mongoUri);
        console.log('Database successfully connected')
    }
    catch (error) {
        console.error(error)
        throw new Error('Error while initiating database')
    }
}

module.exports = dbConnection