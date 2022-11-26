import React, { useEffect ,useState } from 'react'
import { useParams } from 'react-router-dom'
export default function Planet({planetsData}) {
  const params=useParams();
    let [overviewImage,setOverviewImage]=useState('');
    let [geoImage,setGeo]=useState('');
    let backGrounds=['#419EBB','#EDA249','#6f2ed6','#D14C32','#D83A34','#CD5120','#1ec2a4','#2d68f0']
    const planet=planetsData.find(plan => plan.name=== params.planet);
    const getImage=async(planet,type='planet')=>{
        const planetLogo=await import(`./../../assets${planet['images'][type]}`)
        setOverviewImage(planetLogo.default);
    }
    const getGeoImage=async(planet)=>{
      const planetLogo=await import(`./../../assets${planet['images']['geology']}`)
      setGeo(planetLogo.default)
    }

    const inactiveOption=(planetElement,size,index)=>{
       let active=(size=== 'lg')?'activeLink':'activePlanetLink';
       let inactive=(size === 'lg') ? 'planetLink':'planetOption';
      if(planetElement.classList.contains(active))
      {
        planetElement.classList.remove(active);
        planetElement.classList.add(inactive);
      }
    }

    const setActiveOption=(planetElement,size,index,event='')=>{
      let active=(size === 'lg')?'activeLink':'activePlanetLink';
      let inactive=(size === 'lg') ? 'planetLink':'planetOption';
      if(!planetElement.classList.contains(active))
      { 
        if(event==='click')getImage(planet,(planetElement.id === 'geology')?'planet':planetElement.id);
        planetElement.classList.add(active);
        planetElement.classList.remove(inactive);
      }
    
    }
    const setActiveOnload=(planetsElement,size,indexValue)=>{
      planetsElement.forEach((planetElement,index) =>{
        if(index === indexValue){setActiveOption(planetElement,size,index)}
        else{inactiveOption(planetElement,size,index);}
      } )
    }

    const optionChoice=(planetElement,condition,size,index)=>{
      const geologyImage=document.querySelector('#geologyImage');
      if(condition)
      {
       setActiveOption(planetElement,size,index,'click');
       if(planetElement.id === 'geology'){
         geologyImage.classList.remove('d-none')
       }
      }
      else{
       inactiveOption(planetElement,size,index);
       if(planetElement.id !== 'geology'){
         geologyImage.classList.add('d-none')
       }
     }
      

    }

    const handlePlanetOptionSmall=(e)=>{
      const smPlanetClick=document.querySelectorAll('.smPlanetClick');
      const planetOptions=document.querySelectorAll('.planetClick');
      smPlanetClick.forEach((planetElement,index) => {
        optionChoice(planetElement,(e.target === planetElement),'sm',index)
      })
      const activePlanetLink=Array.from(smPlanetClick).find(plan => plan.classList.contains('activePlanetLink'));
      planetOptions.forEach((planetElement,index) =>{
        optionChoice(planetElement,(planetElement.id === activePlanetLink.id),'lg',index)
      })
      setActiveColor();
    }
    
    const handlePlanetOption=(e)=>{
      const planetOptions=document.querySelectorAll('.planetClick');
      const smPlanetClick=document.querySelectorAll('.smPlanetClick');
      planetOptions.forEach((planetElement,index) =>{
        optionChoice(planetElement,(e.target === planetElement || e.target.parentNode === planetElement),'lg',index)
      })
      const activePlanetLink=Array.from(planetOptions).find(plan => plan.classList.contains('activeLink'));
      smPlanetClick.forEach((planetElement,index) =>{
        optionChoice(planetElement,(planetElement.id === activePlanetLink.id),'sm',index)
      })
      setActiveColor();
    }

    const setActiveColor=()=>{
      const planetIndex=planetsData.indexOf(planet);
      const activeLink=document.querySelector('.activeLink');
      const activeLinkSmall=document.querySelector('.activePlanetLink');
      const inactiveLinks=document.querySelectorAll('.planetLink');
      inactiveLinks.forEach(link =>{
        link.style.backgroundColor='transparent';

      })
      activeLink.style.backgroundColor=backGrounds[planetIndex];
      activeLinkSmall.style.setProperty('--linkColor',backGrounds[planetIndex] )
    }
   

    useEffect(()=>{
      getImage(planet);
      getGeoImage(planet);
      setActiveColor();
    },[])
    useEffect(()=>{
      const geologyImage=document.querySelector('#geologyImage');
      const planetOptions=document.querySelectorAll('.planetClick');
      const smPlanetClick=document.querySelectorAll('.smPlanetClick');
      geologyImage.classList.add('d-none');
      getImage(planet);
      getGeoImage(planet);
      setActiveOnload(smPlanetClick,'sm',0);
      setActiveOnload(planetOptions,'lg',0);
      setActiveColor();
    },[planet])
 
  return (
    <>
    <div className='d-md-none d-flex justify-content-around py-3 planetMenuBorder'>
        <span className='activePlanetLink text-uppercase small smPlanetClick' onClick={handlePlanetOptionSmall} id='planet'>overview</span>
        <span className='planetOption text-uppercase small smPlanetClick' onClick={handlePlanetOptionSmall} id='internal'>Structure</span>
        <span className='planetOption text-uppercase small smPlanetClick' onClick={handlePlanetOptionSmall} id='geology'>Surface</span>
    </div>
    <div className='container-lg py-5 mt-md-5'>
        <div className="row align-items-start g-4 py-5 ">
            <div className="col-lg-8 mb-5 pb-3 pb-md-5 pb-lg-0 mb-lg-0 align-self-center position-relative">
                <div className='text-center text-lg-start ms-xl-5 ps-lg-5 '>
                    <img src={overviewImage} alt="section image" className='ps-xl-5 ms-lg-5 PlanetImageWidth'/>
                    <img src={geoImage} alt="section image" className='d-none position-absolute' id='geologyImage'/>
                </div>
            </div>
            <div className="col-lg-4 px-md-5 px-lg-0 mt-5 mt-lg-0">
              <div className="row pe-xl-5 align-items-md-center align-items-lg-start">
                 <div className="col-lg-12 col-md-7">
                    <div className='mb-lg-4 pb-lg-2 text-center text-md-start px-3 px-md-0'>
                          <h2 className='display-5 fw-semibold text-uppercase antoFamily'>{planet.name}</h2>
                          <p className='small text-white fw-lighter pe-lg-3 pe-md-5'>{planet.overview.content}</p>
                          <p>
                            <span className='text-muted fw-light small'>Source: </span>
                              <a href={planet.overview.source} className='text-muted fw-semibold'>
                                  <span>Wikipedia</span>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"><path fill="#FFF" d="M11.34.66C10.9.22 10.37 0 9.75 0h-7.5C1.63 0 1.1.22.66.66.22 1.1 0 1.63 0 2.25v7.5c0 .62.22 1.15.66 1.59.44.44.97.66 1.59.66h7.5c.62 0 1.15-.22 1.59-.66.44-.44.66-.97.66-1.59v-7.5c0-.62-.22-1.15-.66-1.59zM10 6.25a.467.467 0 01-.305.46.544.544 0 01-.195.04.465.465 0 01-.352-.149L8.023 5.476 3.852 9.648a.481.481 0 01-.352.149.48.48 0 01-.352-.149l-.796-.797a.48.48 0 01-.149-.351.48.48 0 01.149-.352l4.172-4.172-1.125-1.125c-.162-.15-.198-.333-.11-.546A.467.467 0 015.75 2H9.5c.135 0 .253.05.352.148A.48.48 0 0110 2.5v3.75z" opacity=".5"/>
                                  </svg>
                              </a>
                          </p>
                      </div>
                 </div>
                 <div className="col-lg-12 col-md-5 d-none d-md-block" >
                 <div>
                      <div className='d-flex align-items-center py-7 px-3 activeLink mb-3 planetClick' onClick={handlePlanetOption} id='planet'>
                        <span className='fw-semibold num'>01</span>
                        <span className='ms-4 text-uppercase fw-normal title small'>OverVIEW</span>
                      </div>
                      <div className='d-flex align-items-center py-7 px-3 planetLink  mb-3 planetClick' onClick={handlePlanetOption} id='internal'>
                        <span className='fw-semibold num'>02</span>
                        <span className='ms-4 text-uppercase fw-normal title small'>Internal Structure</span>
                      </div>
                      <div className='d-flex align-items-center py-7 px-3 planetLink planetClick' onClick={handlePlanetOption} id='geology'>
                        <span className='fw-semibold num'>03</span>
                        <span className='ms-4 text-uppercase fw-normal title small'>Surface Geology</span>
                      </div>
                   </div>
                 </div>
              </div>
            </div>
        </div>
    </div>
    </>
  )
}


