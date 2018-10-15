const mongoose = require('mongoose'),
        Task = mongoose.Schema({
            label:String,
            complete:Boolean
        },{timestamp:true});

module.exports.Task = mongoose.model("Task",Task);