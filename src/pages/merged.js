import { useState } from "react"
import Auto from "./auto";
import Home from "./home";

export const Merged = () =>{
    const [auto, setAuto] = useState(true);


    return (
        <div> 
            

        {
            
            // auto && (<Auto/>) 
            auto ? <Auto/> : <Home/>
            
            // if(auto){
            //     <Auto/>
            // }else{
                
            //     <Home/>
            // } 
        }
        </div>
    )
}