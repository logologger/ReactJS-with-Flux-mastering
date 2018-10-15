import EventEmitter from 'events';
import Dispatcher from '../dispatcher';
import * as ACT from '../types';

export class TasksStore extends EventEmitter{

    constructor(){
        super();
        this.tasks = [];
        this.action = this.action.bind(this);

    }

    getTasks(){
        return this.tasks.slice(0);
    }

    addTask (task){
        //
        const tasks = this.tasks.slice(0);
                     tasks.push(task);
    
        this.tasks = tasks;

        this.emit('change');

    }

    initTasks(tasks){
        this.tasks = tasks;
    }
    action({type,payload}){
        switch(type){
            case ACT.ADD_TASK:
                this.addTask(payload);
                break;
            case ACT.ALL_TASK:
                this.allTask(payload);
                break;
            }
    }
}

const store = new TasksStore();



Dispatcher.register(store.action);

export default store;