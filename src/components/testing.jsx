import { useState } from "react"

export default function Testing(){
    const[count,setCount]= useState(0);

    const [itemName, setItemName]=useState("Coconuts");


    return(
        <div className="w-full h-screen bg-yellow-50 flex flex-col justify-center items-center">
            <h1 className="text-9xl">{count}</h1>

            <button className="w-[200px] h-[60px] bg-black text-3xl text-white
            rounded-lg flex justify-center item-center" onClick={
                ()=>{
                    
                    const newCount = count+1
                    setCount(newCount)
                }
            }>
                Count
            </button>
            <button className="w-[200px] h-[60px] bg-black text-3xl text-white rounded-lg flex justify-center
            " onClick={()=>{
                setItemName("Cocunut")
            }}>
                Coconut
            </button>
            <button className="w-[200px] h-[60px] bg-black text-3xl text-white rounded-lg flex justify-center">
                Banana
            </button>
            <button className="w-[200px] h-[60px] bg-black text-3xl text-white rounded-lg flex justify-center">
                Apple
            </button>
           
        </div>
    )
}