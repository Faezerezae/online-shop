"use client"
import React, { useState } from 'react'

function Counter({ children }: { children: React.ReactNode }) {
    const [counter, setCounter] = useState(1);
    return (
        <div>Counter
            <button className='p-2 m-2 bg-amber-400' onClick={() => { setCounter(counter + 1) }}>Change</button>
            {/* <ServerComp/> client component*/}
            {children}
            {/* children is server component */}
            {counter}
        </div>

    )
}

export default Counter