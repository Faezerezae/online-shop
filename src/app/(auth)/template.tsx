"use client"
import Link from 'next/link';
import React, { useState } from 'react'

function layoutAuth({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [input, setInput] = useState("")
  return (
    <div>
      layoutAuth
      <br />
      <Link className='mr-4' href={"/register"}>Register</Link>
      <Link className='mr-4' href={"/login"}>Login</Link>
      <Link className='mr-4' href={"/forget-password"}>ForgetPassword</Link>
      <br />
      <input className='bg-gray-500' onChange={(e) => setInput(e.target.value)} type="text" value={input} />
      {children}
    </div>
  )
}

export default layoutAuth