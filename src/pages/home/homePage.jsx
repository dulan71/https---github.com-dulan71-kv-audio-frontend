
import { Route, Routes } from "react-router-dom";
import Header from "../../components/header";
import Items from "./items";
import Home from "./home";
import Gallery from "./gallery";
import Contact from "./contact";
import ErrorNot from "./error";


export default function HomePage(){
    return(
        <>
      <Header/>
      
    <div className = "h-[calc(100vh-100px)] w-full bg-primary">
        <Routes path="/*">
            <Route path = "/contact" element={<Contact/>}/>
            <Route path = "/gallery" element={<Gallery/>}/>
            <Route path="/items" element={<Items/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/*" element={<ErrorNot/>}/>
        </Routes>

    </div>
    </>
    )
}