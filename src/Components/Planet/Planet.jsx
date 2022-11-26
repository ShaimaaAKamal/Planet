import { useParams } from 'react-router-dom';
import PlanetInfo from '../PlanetInfo/PlanetInfo';
import SciInfo from '../SciInfo/SciInfo'

export default function Planet({planetsData}) {
    const params=useParams();
    const planet=planetsData.find(plan => plan.name=== params.planet);

    return(
      <>
          <PlanetInfo planet={planet} planetsData={planetsData} />
          <SciInfo planet={planet}/>
      </>
    )
 
}


