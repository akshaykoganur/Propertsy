const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI)

const connection = mongoose.connection;

connection.on('connected', () => {
    console.log('MongoDB connected successfully');
    //const fetchedSell = ;
    //console.log(fetchedSell);
    mongoose.connection.db.collection("sells").find({}).toArray(function(err,data){
        if(err) console.log(err);
        else{
            global.sellData = data;
            console.log(data);
        }
        //console.log('hi');
    })
});

connection.on('error', () => {
    console.log('Error while connecting MongoDB');
})

module.exports = mongoose;