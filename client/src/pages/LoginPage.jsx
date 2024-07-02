import { useForm } from 'react-hook-form'
import { useAuth } from '../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

function LoginPage() {

    const {register, handleSubmit, formState: {errors},} = useForm()
    const {signin, errors: signinErrors, isAuthenticated} = useAuth()
    const isErrorArray = Array.isArray(signinErrors) && signinErrors.length > 0;
    const navigate = useNavigate()

    const onSubmit = handleSubmit((data) => {
        signin(data)
    })

    useEffect(() =>{
        if (isAuthenticated) navigate('/tasks')
    }, [isAuthenticated])

    return(
        <div className='flex h-[calc(90vh-100px)] items-center justify-center'>

        <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md flex flex-col justify-between'>
            {isErrorArray && signinErrors.map((error, i) => (
                <div className="bg-red-500 p-2" key={i}>
                    {error}
                </div>
            ))}
            
            <h1 className="text-2xl font-bold mb-2">Login</h1>
            <form onSubmit={onSubmit} className="flex flex-col">
                
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
                
                <button type="submit" className="bg-indigo-500 text-white px-4 py-2 rounded-md mt-4">
                    Login
                </button>
            </form>
            
            <p className='text-white text-sm mt-5'>
            Don&apos;t have an account? <Link to="/register" className='text-sky-500'>Sign up</Link>
            </p>
        </div>
    
    </div>
    )
}

export default LoginPage