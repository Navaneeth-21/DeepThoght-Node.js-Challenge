const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 4000;
const apirouters = require('./routers/userRouter');
const app = express();

app.use(bodyParser.json());

app.use('/api/v3/app' , apirouters);


app.get('/' , (req,res)=>{
    res.send('<h1>Hello Navaneeth</h1>');
})

app.listen(PORT , ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});
