import React from "react";
import {Mark} from "../assets/human.js";
import Button from 'rsuite/Button';
import { useEffect, useState } from "react";

import "../css/main.css";
export const Main = ()=>{
    const [Symp,setSymp] = useState([]);
    const handleChange = ()=>{
        console.log("clicked"+Symp);
    }
    return(
        <div className="container">
            <div className="inner">
               <Mark symp1 = {setSymp} symp2 = {Symp}/>
                <Button onClick={handleChange}>Find Disease</Button>
            </div>
        </div>
    )
}

