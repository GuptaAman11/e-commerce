

const mongoose = require('mongoose')


const url = 'mongodb+srv://suraj:suraj@cluster0.iorvdzq.mongodb.net/?retryWrites=true&w=majority'

const Connection = () => {
      mongoose.connect(url).then(() => {
        console.log("concttioned!!!") })
    
}


module.exports = {
    Connection
}