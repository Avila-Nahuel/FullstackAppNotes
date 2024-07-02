import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

function Navbar() {

    const {isAuthenticated, logout, user} = useAuth()

    return (
        <nav className="mb-10 mt-5 bg-zinc-700 my-3 flex justify-between py-5 rounded-lg">
            <Link>
                <h1 className="px-4 text-2xl font-bold">Tasks manager</h1>
            </Link>
            <ul className="flex gap-x-2">
              {isAuthenticated ? (
                <>
                {user && user.username &&(
                  <li>
                        Welcome {user.username}
                </li>
                )}
                <li>
                    <Link to={'/add-task'} 
                    className="bg-indigo-500 px-2 py-1 rounded-md transition duration-300 hover:bg-blue-700"
                    >Add Task</Link>
                </li>
                <li>
                    <Link to={'/'} className="mr-4 transition duration-300 hover:text-gray-400" onClick={() => {logout()}}>Logout</Link>
                </li>
                </>
              ) : (
                 <>
                    <li>
                    <Link className="bg-indigo-500 px-2 py-1 rounded-md transition duration-300 hover:bg-blue-700"
                    to={'/login'} >Login</Link>
                </li>
                <li>
                    <Link to={'/register'} className="bg-indigo-500 px-2 mr-2 min-w-h py-1 rounded-md transition duration-300 hover:bg-blue-700">Register</Link>
                </li>
              </>
              )}
            </ul>
        </nav>
    )
}

export default Navbar