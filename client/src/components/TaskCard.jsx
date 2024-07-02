import { useTasks } from "../context/TasksContext"
import { Link } from "react-router-dom"

function TaskCard({task}) {

    const { deleteTask } = useTasks()

    return(
        <div className=" bg-zinc-700 shadow-lg p-6 rounded-lg max-w-md w-full p-10 ">
        <header className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-zinc-400 max-w-200">{task.title}</h1>   
            <div className="flex gap-x-2 items-center">
                <Link className=" text-blue-500 hover:text-blue-700 font-semibold transition duration-300" to={`/tasks/${task._id}`}>
                    Edit
                </Link>
                <button className="px-2 py-1 rounded-md bg-red-400 hover:bg-red-600 text-white transition duration-300"
                    onClick={() => {
                        deleteTask(task._id)
                    }}>
                    Delete
                </button>
            </div>
        </header>
        <p className="text-gray-000">{task.description}</p>
    </div>
    )
}

export default TaskCard
