import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'

export default function Layout({planetsData,backGrounds}) {
  return (
    <>
      <Navbar planetsData={planetsData} backGrounds={backGrounds}/>
      <Outlet/>  
    </>
  )
}
