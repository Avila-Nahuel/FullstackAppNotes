import axios from './axios'

export const getTasksRequest = () => axios.get('/tasks')

export const getTaksRequest = (id) => axios.get(`/tasks/${id}`)

export const createTaskRequest = (task) => axios.post('/tasks', task)

export const updateTaskRequest = (id, task) => axios.put(`/tasks/${id}`, task)

export const deleteTasksRequest = (id) => axios.delete(`/tasks/${id}`)