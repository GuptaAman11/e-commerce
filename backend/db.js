

const mongoose = require('mongoose')


const url = 'mongodb+srv://suraj:suraj@e-commerce.o39krqv.mongodb.net/?retryWrites=true&w=majority'

const Connection = () => {
      mongoose.connect(url).then(() => {
        console.log("concttioned!!!") })
    
}


module.exports = {
    Connection
}