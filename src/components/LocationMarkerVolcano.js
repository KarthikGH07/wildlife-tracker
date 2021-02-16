import { Icon } from '@iconify/react';
// import locationIconVolcano from '@iconify/icons-mdi/lava-lamp';
import locationIconVolcano from './volcano.png';

const LocationMarkerVolcano = ({ lat, lng, onClick }) => {
    return (
        <div className='location-marker' onClick={onClick}>
            <img src={ locationIconVolcano } className='location-icon-volcano'/>
        </div>
    )
}

export default LocationMarkerVolcano