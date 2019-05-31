import React from 'react';
import './Part.css'

//passing the Dash methods down through props
function Part(props) {
  let {id, name, number, price, img, descrip} = props.part;
    return (
          <span>
          <center>
          <div>
            <img src={img} alt={name} height="150px" width="200px" />
            </div>
        <h6>
          <br/>Item: {name}
          <br/> Item No. {number} 
          <br/>Price: ${price}.00
          <br/>Description: {descrip}
        </h6>
        </center>
        <center>
          <button className="myButton" onClick={() => props.deletePart(id)}>DELETE</button>
        </center>
        </span>
    )
}

export default Part;