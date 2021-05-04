const mongoose = require('mongoose');

const DB = process.env.DATABASE;

mongoose.connect("mongodb://localhost:27017/vocvision", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify:false
}).then(() => {
    console.log(`connnection successful`);
}).catch((err) => console.log(`no connection`));