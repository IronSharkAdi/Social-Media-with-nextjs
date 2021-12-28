import { NextPage } from "next";
import { useState } from "react";
import Login from "../Server/firebase/login";
import  {useRouter}  from 'next/router';
import Loader from "react-loader-spinner";



const login: NextPage = () => {
    const router = useRouter()
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [submitting, setSubmitting] = useState(false)

	const handleSubmit =async (e:any) =>{
		e.preventDefault()
		setSubmitting(true)
		const response:any = await Login(email, password)
		setSubmitting(false)
        if(response === true){
            router.push('/')
        }
	}

    return (
        <div>
            <div
                className="relative min-h-screen  flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 bg-gray-500 bg-no-repeat bg-cover relative items-center"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1525302220185-c387a117886e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
                }}
            >
                <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
                <div className="max-w-md w-full space-y-8 p-10 backdrop-blur-md bg-white/30  rounded-xl z-10">
                    <div className="text-center">
                        <h2 className="mt-6 text-3xl font-bold text-white">
                            Register
                        </h2>
                        <p className="mt-2 text-sm text-slate-200">
                            Make an account
                        </p>
                    </div>

                    <form className="mt-8 space-y-6"  onSubmit={(e) => handleSubmit(e)}>
                        <input type="hidden" name="remember" value="true" />
                        <div className="relative">
						<label className="text-sm font-bold text-gray-700 tracking-wide">
                                Email
                            </label>
                            <input
                                className="w-full  focus:outline-none backdrop-blur-md bg-white/30 rounded-md pl-3 content-center text-base py-2   "
                                type=""
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mt-8 content-center">
                            <label className="text-sm font-bold text-gray-700 tracking-wide">
                                Password
                            </label>
                            <input
                                className="w-full  focus:outline-none backdrop-blur-md bg-white/30 rounded-md pl-3 content-center text-base py-2   "
                                type="password"
                                placeholder="Enter the password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                disabled={submitting}
                                className={`w-full ${submitting ? "bg-gray-500 " : "bg-indigo-600 hover:bg-indigo-700 text-gray-100"} flex justify-center  p-4  rounded-full tracking-wide font-semibold  focus:outline-none focus:shadow-outline  shadow-lg cursor-pointer transition ease-in duration-300`}
                            >
                               {submitting ? (<Loader type="Oval" color="#00BFFF" height={30} width={30} />): "Register"} 
                            </button>
                        </div>
                        <p className="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
                            <span className="text-stone-200	">
                                Don't have an account?
                            </span>
                            <a
                                href="/register"
                                className="text-stone-50 hover:text-indigo-500 no-underline hover:underline cursor-pointer transition ease-in duration-300"
                            >
                                Register
                            </a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default login
