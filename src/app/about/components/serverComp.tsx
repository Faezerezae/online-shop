//"این کامپوننت کلاینت کامپوننت هستش چون پدرش کلاینت کامپوننت هستش"
import React, { useState } from 'react'

function ServerComp() {

const [ serverComp] = useState("");
    
  return (
    <div>{serverComp}</div>
  )
}

export default ServerComp