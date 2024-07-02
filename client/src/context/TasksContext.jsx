import { createContext, useContext, useState } from "react";
import {createTaskRequest, getTasksRequest, deleteTasksRequest, getTaksRequest, updateTaskRequest } from '../api/tasks'

const TasksContext = createContext()

export const useTasks = () => {
    const context = useContext(TasksContext)
    if(!context){
        throw new Error("useTasks must be used within a TaskProvider")
    }
    return context
}

export function TaskProvider({ children }) {
    const [tasks, setTasks] = useState([])
        
    const getTasks = async () => {
       try{
            const res = await getTasksRequest()
            setTasks(res.data)
        
       }catch (error) {
        console.log(error)
       }
    }

    const deleteTask = async (id) => {
        try{
           const res = await deleteTasksRequest(id)
           if(res.status === 204) setTasks(tasks.filter(task => task._id !== id))
        }catch(error) {
            console.log(error)
        }
    }
    

    const createTask = async (task) => {
        try {
            const res = await createTaskRequest(task)
            setTasks([...tasks, res.data])
            console.log(res)
        } catch (error) {
            console.error(error)
        }
    };

    const getTask = async (id) =>{
        try {
            const res = await getTaksRequest(id)
            return res.data
        } catch (error) {
            console.error(error)
        }
    }

    const updateTask = async (id, task) =>{
        try {
            await updateTaskRequest(id, task)
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <TasksContext.Provider value={{ tasks, createTask, getTasks, deleteTask, getTask, updateTask }}>
            {children}
        </TasksContext.Provider>
    );
}