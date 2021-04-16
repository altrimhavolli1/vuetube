const mongoose = require('mongoose')

const DBConnection = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    }).catch(err => {
        console.log(`For some reasons we are unable to connect to MongoDB`.red, err)
    })

    console.log(`MongoDb Connected on host -> ${conn.connection.host}`.cyan.bold)
}

module.exports = DBConnection