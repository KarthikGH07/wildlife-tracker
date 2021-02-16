import { Icon } from '@iconify/react';
// import locationIconVolcano from '@iconify/icons-mdi/lava-lamp';
import locationIconIce from './iceberg.png';

const LocationMarkerIce = ({ lat, lng, onClick }) => {
    return (
        <div className='location-marker' onClick={onClick}>
            <img src={ locationIconIce } className='location-icon-ice'/>
        </div>
    )
}

export default LocationMarkerIce
