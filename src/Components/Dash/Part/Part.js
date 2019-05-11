import React from 'react';
import './Part.css'
import Header from '../../Header/Header'

//passing the Dash methods down through props
function Part(props) {
  let {id, name, number, price, img, descrip} = props.part;
    return (
      <div>
        <div>
          <Header />
        <div>
          <span>
          <center>
          <div>
            <img src={img} alt={name} height="180px" width="200px" />
            </div>
        <h6>
          <br/>Item: {name}
          <br/> Item No. {number} 
          <br/>Price: ${price}.00
          <br/>Description: {descrip}
        </h6>
        </center>
        </span>
        </div>
        </div>
        <center>
          <button className="myButton" onClick={() => props.deletePart(id)}>Delete</button>
        </center>
      </div>
    )
}

export default Part;