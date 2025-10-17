"use client";
import { useState } from "react" 


export default function DashboardPage (){   
    console.log("Dashboard Client Component ");
    
    const [name,setname] = useState(""); 
    return (
    <div>
        <h1>Dashboard Page</h1> 
        <input className="bg-white" value={name} onChange={(e)=> setname(e.target.value)} />
        <p>Hello , {name}!</p>
    </div>
)  
} 