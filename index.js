const express = require('express'),
      mongoose = require('mongoose'),
      Task = require('./models/tasks').Task;
      bodyParser = require('body-parser');
      app = express();

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/todo',(err)=>{
    err && console.log(err);
})



app.use(express.static('deploy'));
app.use(bodyParser.json());
app.use(bodyParser.text());


app.set('view engine','ejs');

app.get("/",(req,res)=>{

    //res.send("Hello World ..Hey ");
    res.render("blank",{
        title:"Masternig Flux here",
        body:"<div id='root'></div>"
    });
});

app.get('/all',(req,res)=>{
    Task.find({},(err,tasks)=>{
        res.send(tasks);
    })
})

app.post('/add-task',(req,res)=>{

    const task = new Task(req.body);

    console.log("Came here"+task)

    task.save((err,task) =>{
        console.log("ok")
        if(err || !task){
            console.log("error"+err)
        }
        else{
           console.log("success")
        }
    });
    res.send(req.body);
   
});

app.listen(3502 , ()=>{
    console.log("We are running a server on port 3502");
});