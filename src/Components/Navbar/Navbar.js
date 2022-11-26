import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar({planetsData,backGrounds}) {
    const navigate=useNavigate();
    const planets=planetsData.map(planet =>  planet.name);
    const getPlanet=(planet)=>{
       navigate(`/Planet/${planet}`);
    }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark  px-3 py-3">
    <div className="container-fluid">
      <Link className="navbar-brand text-uppercase antoFamily mb-md-3 mb-lg-0 fs-2" to="/">The Planets</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="17"><g fill="#FFF" fillRule="evenodd">
            <path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z"/></g>
        </svg>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
          {planets.map((planet,index)=> 
              (<li className="nav-item" key={index} >
             <div className='d-flex justify-content-between align-items-center py-1 Planet' onClick={()=>getPlanet(planet)}>
                <div className='d-flex align-items-center'>
                   <i className="fa-solid fa-circle d-md-none me-3" style={{color:`${backGrounds[index]}`}}></i>
                    <Link className="nav-link fw-semiBold fs-7 text-uppercase" aria-current="page" to={`/Planet/${planet}`}>{planet}</Link>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="8" className='d-md-none'>
                    <path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4"/>
                </svg>
             </div>
          </li>)
          
          )}
        </ul>
      </div>
    </div>
  </nav>
  )
}
