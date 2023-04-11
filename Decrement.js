import React, { useState } from "react";
export default function Decrement(){
    const[val,setVal]=(useState(0));
    const Decrement=()=>{
        setVal(val-1);
    }

    return<>
    <h1>{val}</h1>
    <button className="btn btn-primary" onClick={Decrement}>Decrement</button>
    </>;
}