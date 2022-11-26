import React from 'react'

export default function SciInfo({planet}) {
  return (
    <div className='container-lg mb-5 mt-lg-3 px-5 px-md-4 px-lg-0'>
       <div className="row gy-3 gx-2">
          <div className="col-md-3">
             <div className='border border-1 border-secondary p-4'>
                <span className='small text-muted fw-semibold'>ROTATION TIME</span>
                <h3 className='mt-3 facts'>{planet.rotation}</h3>
             </div>
          </div>
          <div className="col-md-3">
             <div className='border border-1 border-secondary p-4'>
                <span className='small text-muted fw-semibold'>REVOLUTION TIME</span>
                <h3 className='mt-3 facts'>{planet.revolution}</h3>
             </div>
          </div>
          <div className="col-md-3">
             <div className='border border-1 border-secondary p-4'>
                <span className='small text-muted fw-semibold'>Radius</span>
                <h3 className='mt-3 facts'>{planet.radius}</h3>
             </div>
          </div>
          <div className="col-md-3">
             <div className='border border-1 border-secondary p-4'>
                <span className='small text-muted fw-semibold'>AVERAGE TEMP</span>
                <h3 className='mt-3 facts'>{planet.temperature}</h3>
             </div>
          </div>
       </div>
    </div>
  )
}
