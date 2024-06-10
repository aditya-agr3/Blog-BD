const mongoose = require("mongoose");

require("dotenv").config();

const connectWithDb = () => {
    mongoose.disconnect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(console.log("DB connected Succcessfully"))
    .catch( (error) => {
        console.log("DB facing Connection Issues");
        console.log('.');
        console.log(error);
        process.exit(1);
    })
};

module.exports = connectWithDb;

