const {default: mongoose}  = require("mongoose")

const mongo = () => {
    const conn = mongoose.connect('mongodb://db-mongo-ecommerce:27017/develop', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log('Connect Successfully');
    }).catch((error) => {
        console.log('Error in connection:', error);
    });
}

module.exports = mongo;