import React, { useState } from "react";
export default function Increment(){
    const[val,setVal]=(useState(0));
    const Increment=()=>{
        setVal(val+1);
    }

    return<>
    <h1>{val}</h1>
    <button className="btn btn-success" onClick={Increment}>Increment</button>
    </>;
}