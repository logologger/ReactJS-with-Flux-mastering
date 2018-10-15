import React from 'react';
import Task from './task';
import Button from './button';
import TasksStore from '../flux/stores/tasks';
import {addTasks} from '../flux/actions/tasks';

export default class Tasks extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            tasks:TasksStore.getTasks()
        }

        this.addTask = this.addTask.bind(this);
    }

    componentDidMount(){
        TasksStore.on('change',()=>{
            this.setState({tasks:TasksStore.getTasks()})
        })
    }

    addTask(e){
        const tasks = this.state.tasks.slice(0) ,
              input = this.input;

              addTasks({label:input.value });
              debugger

        this.setState({tasks:TasksStore.getTasks()});

        this.input.value = '';
    }

    render(){
        const {tasks} = this.state,chl = [];
        for(const {_id,label,...rest} of tasks){
            chl.push(<Task key={_id}>{label}</Task>);
            
        }
        return <div>
                {chl}
                <input name="add" ref={(a)=>{this.input = a}} type="text" />
                <Button className="-secondary" onClick={this.addTask}>Add Task</Button>
            </div>
    }
}