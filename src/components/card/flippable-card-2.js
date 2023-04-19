import { useState } from 'react';

function FlippableCard2({children}) {
    const [showFront, setShowFront] = useState(true);

    return (
        <div className={"card " + (showFront ? 'flipped' : '')} onClick={() => {
            setShowFront(!showFront);
        }}>
            {children}
        </div>
    )
}

export default FlippableCard2;