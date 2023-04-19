import "./card.css";

function Card({onClick, flipped}) {
  return (
    <div className={"card " + (flipped ? 'flipped' : '')} onClick={onClick}>
      <div className="card-back"> Back </div>
      <div className="card-front">
       <img src="./images/psych.png" width={'300px'} height={'500px'}/>
      </div>
    </div>
  );
}



export default Card;