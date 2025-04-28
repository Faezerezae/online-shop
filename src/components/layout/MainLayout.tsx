"use client"
import React, { useState } from 'react'
import Navbar from '../navbar/Navbar'
import { AppContext } from '@/context/AppContext';
interface IMainLayoutProps {
  children: React.ReactNode;
}
//تنها یک سرور کامپونت را در صورتی میتونیم بدیم اینجا که به چالد ردش کنیم
function MainLayout({ children }: IMainLayoutProps) {
  const [data] = useState<string>("test");

  return (
    <AppContext.Provider value={{ data }}>
      <Navbar />
      {children}
    </AppContext.Provider>
  )
}

export default MainLayout