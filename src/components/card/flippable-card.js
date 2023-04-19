import Card from './card';
import {useState} from 'react';

function FlippableCard() {
    const [showFront, setShowFront] = useState(true);
    return<>

    <div className='card'>
        <div className="flippable-card-container">
            <>
                <Card onClick={() => {
                    setShowFront(!showFront);
                }} flipped={showFront}/>
            </>
    </div>

    </div>  
    
</>
}

export default FlippableCard;