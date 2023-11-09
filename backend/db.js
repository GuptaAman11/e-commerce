

const mongoose = require('mongoose')


const url = 'mongodb+srv://raj:raj@cluster0.6d6kuqv.mongodb.net/?retryWrites=true&w=majority'

const Connection = () => {
      mongoose.connect(url).then(() => {
        console.log("concttioned!!!") })
    
}


module.exports = {
    Connection
}