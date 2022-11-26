import React from 'react'
import NotFoundImage from '../../assets/404.png'
import { Link } from 'react-router-dom'
export default function NotFound() {
  return (
    <div className='vh-100 d-flex align-items-center justify-content-center position-relative' >
      <Link to='/'>
        <span className='position-absolute rounded-2 NotFoundLink'>
        <i className="fa-solid fa-arrow-left me-2"></i>Go Home</span>
      </Link>
      <img src={NotFoundImage} alt="Not found image"  className='w-100 h-100' style={{objectFit:'cover'}}/>
    </div>
  )
}
