const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Tour = require('./../../models/tourModel')

dotenv.config({ path: './config.env' });

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
}).then(() => {
    console.log("DB connection successful")
});

const tours = JSON.parse(fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf-8'))

const importData = async() => {
    try{
        await Tour.create(tours);
        console.log('data successfully loaded !')
        process.exit()
    }catch(err){
        console.log(err)
    }
}

const deleteData = async() =>{
    try{
        await Tour.deleteMany();
        console.log('Data deleted successfully !')
        process.exit()
    }catch(err){
        console.log(err)
    }
}

if(process.argv[2] === '--import'){
    importData()
} else if(process.argv[2]==='--delete'){
    deleteData()
}