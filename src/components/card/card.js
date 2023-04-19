
import "./card.css";
import FlippableCard2 from "./flippable-card-2";

function Card({ onClick, flipped }) {

  const cardImages = ['registration.png', 'golfapp.png',]

  return cardImages.map(index => {
    return (

      <FlippableCard2>
          <div className="card-back"> Back </div>
          <div className="card-front">
            <img src={'./images/' + index} width={'300px'} height={'500px'} />
          </div>
      </FlippableCard2>
    )
  });
}



export default Card;