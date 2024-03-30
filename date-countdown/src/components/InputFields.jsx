import React from "react";
import { useState } from "react";

export function WhatTime(day,month,year) {
    const czas = day+'-'+month+'-'+year
    return czas
}

export default function InputFields() {
    const [Day, setDay] = useState(0);
    const [Month, setMonth] = useState(0);
    const [Year, setYear] = useState(0);
    
    const handleCountdown = (event) => {
        WhatTime(Day,Month,Year)
    }



    return (
        <div className="w-full h-2/5 bg-sky-50 flex">
            <div className="w-48 h-48 m-12 flex flex-col justify-center items-center">
                <span className="">Day</span>   
                <input id="Day" onChange={(e) => setDay(e.target.value)} className="w-20 h-12 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" type="number" placeholder="Day" />
            </div>

            <div className="w-48 h-48 m-12 flex flex-col justify-center items-center">  
                <span className="">Month</span>
                <input id="Month" onChange={(e) => setMonth(e.target.value)} className="w-20 h-12 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" type="number" placeholder="Month" />
            </div>
            <div className="w-48 h-48 m-12 flex flex-col justify-center items-center">
                <span className="">Year</span>
                <input id="Year" onChange={(e) => setYear(e.target.value)} className="w-20 h-12 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" type="number" placeholder="Year" />
            </div>
            <div className="w-48 h-48 m-12 flex flex-col justify-center items-center">
                <button onClick={() => handleCountdown()}>Przekaż</button>
            </div>
        </div>
    )
}