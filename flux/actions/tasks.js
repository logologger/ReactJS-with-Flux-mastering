import Dispatcher from '../dispatcher';
import * as ACT from '../types';
import ajax from '../../utils/ajax';

export function addTasks(payload){

    ajax({
        url:'/add-task',
        data:payload,
        successHook: (task) =>{
            addTasksSync(task);
        },
        failHook:(success) =>{

        }
    })
}

export function addTasksSync(payload){

    Dispatcher.dispatch({type:ACT.ADD_TASK,payload:payload});
}

export function getAllTasks(){
    ajax({
        url:'/all',
        data:payload,
        method:'get',
        successHook: (task) =>{
            Dispatcher.dispatch({type:ACT.ALL_TASKS,payload:tasks});
        },
        failHook:(success) =>{

        }
    })
}