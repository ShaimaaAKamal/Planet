import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar';
import { useEffect } from "react";

export default function Layout({planetsData,backGrounds}) {
  useEffect(()=>{
    const navLinks=document.querySelectorAll('.nav-link');
    const NavColors=['#419EBB','#EDA249','#6f2ed6','#D14C32','#D83A34','#CD5120','#1ec2a4','#2d68f0']
    navLinks.forEach((link,index) => {
      link.style.setProperty('--navLinkColor',NavColors[index] )
      if(link.classList.contains('active')){
        link.style.setProperty('--navLinkColor',NavColors[index] )
      }
      link.addEventListener('click',function(e){
        link.style.setProperty('--navLinkColor',NavColors[index] )
      })
    })
},[])
  return (
    <>
      <Navbar planetsData={planetsData} backGrounds={backGrounds}/>
      <Outlet/>  
    </>
  )
}
