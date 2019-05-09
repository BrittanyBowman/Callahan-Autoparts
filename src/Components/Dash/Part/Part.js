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
        <h6><p>Item: {name}<p> Item No. {number} </p><p>Price: ${price}.00</p>
        Description: {descrip}</p></h6>
        </center>
        </span>
        </div>
        </div>
        <center>
          <button onClick={() => props.deletePart(id)}>Delete</button>
        <button onClick={()=> props.updatePart(id)}>Update</button>
        </center>
      </div>
    )
}
//Need to build Update method
//Delete button is now working
export default Part;