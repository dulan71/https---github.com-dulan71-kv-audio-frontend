import axios from "axios";
import "./login.css";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function LoginPage(){

    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("");

    const navigate = useNavigate()

    function handleOnSumbit(e){
       
        e.preventDefault()
        console.log(email,password)

        const backendUrl = import.meta.env.VITE_BACKEND_URL

        axios.post(`${backendUrl}/api/users/login`,
            {
                email : email,
                password : password
            }
        ).then((res)=>{
            console.log(res)
            toast.success("Login Success")
            const user= res.data.user
            localStorage.setItem("token",res.data.token)
            
            if(user.userType == "admin"){
                navigate("/admin/")
            }else{
                navigate("/")
            }

        }).catch((err)=>{
            console.log(err)
            toast.error(err.response.data.error)
        })

    }

    return(
    <div className="bg-picture w-full h-screen flex justify-center items-center">
        
    <form onSubmit={handleOnSumbit}>

        <div className="w-[400px] h-[400px] backdrop-blur-xl rounded-2xl 
        flex justify-center items-center flex-col">

            <img src="/logo.png" alt="logo" className="w-[100px] h-[100px]
           object-cover"/>

            <input type="email" placeholder="Email" className="w-[300px]
            h-[30px] bg-transparent border-b-2 border-white text-white
            text-2xl outline-none mt-6"
            value={email}
            onChange={ 
                (e)=>{
                    setEmail(e.target.value)
                }
            }></input>

            

            <input type="password" placeholder="Password" className="w-[300px]
            h-[30px] bg-transparent border-b-2 border-white text-white text-2xl 
            outline-none mt-6"
            value={password}
            onChange={
                (e)=>{
                    setPassword(e.target.value)
                }
            }></input>

            <button className ="my-8 w-[300px] h-[50px] bg-[#efac38] text-2xl
            text-white rounded-lg" >Login</button>
        
        </div>
        </form>
    </div>

    )
}