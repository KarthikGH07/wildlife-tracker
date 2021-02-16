import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';
import LocationMarkerStorm from './LocationMarkerStorm';
import LocationInfoBox from './LocationInfoBox';
import { useState } from 'react';
import LocationMarkerIce from './LocationMarkerIce';
import LocationMarkerVolcano from './LocationMarkerVolcano';


const NATURAL_EVENT_WILDFIRE = 8;
//Severe Storms
const NATURAL_EVENT_STORMS = 10;

const NATURAL_EVENT_ICE = 15;

const NATURAL_EVENT_VOLCANO = 12;

const Map = ({ center, zoom, eventData }) => {
    const [locationInfo, setLocationInfo] = useState(null)

    var storms = [];
    var icebergs = [];
    const markers = eventData.map(ev => {
        if(ev.categories[0].id === NATURAL_EVENT_WILDFIRE) {
            return <LocationMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]}
                         onClick= { () => setLocationInfo({id: ev.id, title: ev.title})}/>
        }
        else if(ev.categories[0].id === NATURAL_EVENT_ICE) {
            if(ev.geometries.length > 0){
                for(var i = 0; i < ev.geometries.length; i++)
                {
                    icebergs.push(<LocationMarkerIce lat={ev.geometries[i].coordinates[1]} lng={ev.geometries[i].coordinates[0]}
                         onClick= { () => setLocationInfo({id: ev.id, title: ev.title})}/>)
                    }
                }
        }
        else if(ev.categories[0].id === NATURAL_EVENT_STORMS){
            if(ev.geometries.length > 0){
                for(var i = 0; i < ev.geometries.length; i++)
                {
                    storms.push(<LocationMarkerStorm lat={ev.geometries[i].coordinates[1]} lng={ev.geometries[i].coordinates[0]}
                    onClick= { () => setLocationInfo({id: ev.id, title: ev.title})}/>)
                }
            }
        }
        else if(ev.categories[0].id === NATURAL_EVENT_VOLCANO) {
            if(ev.geometries[0].coordinates.length === 2){
            return <LocationMarkerVolcano lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]}
                         onClick= { () => setLocationInfo({id: ev.id, title: ev.title})}/>
            }
        }
        
        return null
    })
    markers.push(...icebergs)
    markers.push(...storms)
    return (
        <div className='map'>
            <GoogleMapReact
                bootstrapURLKeys = {{ key: 'AIzaSyAyVhyRS-x3QvBwADZX3LQdDNrL5lz_j-w'}}
                defaultCenter={center}
                defaultZoom={zoom}
                >
                {/* {console.log(markers)} */}
                {markers}
            </GoogleMapReact>
            { locationInfo && <LocationInfoBox info={locationInfo}/>}
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 42.3265,
        lng: -122.8756
    },
    zoom: 6
}

export default Map
