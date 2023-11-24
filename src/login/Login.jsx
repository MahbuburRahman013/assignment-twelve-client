import { useForm } from "react-hook-form";
import {Link} from 'react-router-dom'


const Login = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div className="flex justify-between">
            <div className="w-[50%] flex justify-center items-center">

                <form className="bg-white w-[70%]  p-8 shadow-lg rounded-lg" onSubmit={handleSubmit(onSubmit)}>
                    <h2 className="text-2xl font-bold mb-4">Login</h2>


                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                            Email
                        </label>
                        <input
                            type="text"
                            id="email"
                            {...register('email', {
                                required: 'Email is required',
                            })}
                            className={`w-full p-2 border block rounded ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                        <input
                            type="password"
                            id="password"
                            {...register('password', { required: 'Password is required' })}
                            className={`w-full p-2 block border rounded ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
                    </div>

                   <div className="flex justify-between">
                   <button
                        type="submit"
                        className=" w-[45%] border border-blue-600 hover:text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
                    >
                        Login
                    </button>
                    <div
                        className="w-[45%] text-center border border-orange-600 hover:text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
                    >
                        Google
                    </div>

                   </div>
                   <h1 className="mt-5">Are You New Here? <Link className="text-blue-700 underline" to='/registration'>Registration</Link></h1>
                </form>


            </div>

            <div className="h-screen bg-blue-500 w-[25%]">
            </div>
            <img className="right-0 h-full w-[50%] absolute" src="https://i.ibb.co/2gj3JdK/office-7048049-1280-1.png" alt="" />
        </div>
    );
};

export default Login;