import { useForm } from "react-hook-form"
import { useAuth } from "../context/AuthContext"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

function RegisterPage() {
    const {register, handleSubmit, formState: {errors}} = useForm()
    const {signup, isAuthenticated, errors: registerErrors} = useAuth()
    const navigate = useNavigate()
    const isErrorArray = Array.isArray(registerErrors) && registerErrors.length > 0;

    useEffect(() => {
        if (isAuthenticated) navigate('/tasks')
    }, [isAuthenticated]);

    const onSubmit = handleSubmit(async(values) => {
       signup(values)
    })

    return(
        <div className="flex h-[calc(90vh-100px)] items-center justify-center">
        <div className="bg-zinc-800 w-full max-w-md p-10 rounded-md flex flex-col justify-between">
            {isErrorArray && registerErrors.map((error, i) => (
                <div className="bg-red-500 p-2" key={i}>
                    {error}
                </div>
            ))}
            
            <h1 className="text-2xl font-bold">Register</h1>
            <form onSubmit={onSubmit} className="flex flex-col">
                <input
                    type="text"
                    {...register('username', { required: true })}
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    placeholder="Username"
                />
                {errors.username && (
                    <p className="text-red-500">Username is required</p>
                )}
                
                <input
                    type="email"
                    {...register('email', { required: true })}
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    placeholder="Email"
                />
                {errors.email && (
                    <p className="text-red-500">Email is required</p>
                )}
                
                <input
                    type="password"
                    {...register('password', { required: true })}
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    placeholder="Password"
                />
                {errors.password && (
                    <p className="text-red-500">Password is required</p>
                )}
                
                <button className="bg-indigo-500 text-white px-4 py-2 rounded-md mt-4" type="submit">
                    Register
                </button>
            </form>
            
            <p className='text-white text-sm mt-2'>
                Already have an account?{" "} <Link to="/login" className='text-sky-500'>Login</Link>
            </p>
        </div>
    </div>
    )
}

export default RegisterPage