const express = require('express');
const app = express();

const port = process.env.PORT||3000;


app.set('view engine', 'ejs')

app.get('/', (req, res)=>{
    res.render('base',{title:"login"});
})

app.listen(port,() => {
    console.log(`Server running at http://localhost:3000`);
  });