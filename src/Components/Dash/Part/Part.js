import React from 'react';
import './Part.css'

//passing the Dash methods down through props
function Part(props) {
  let {id, name, number, price, img, descrip} = props.part;
    return (
          <div className="card">
          <center>
          <div>
            <img src={img} alt={name} height="150px" width="200px" />
            <div><button className="myButton2" onClick={() => props.deletePart(id)}>Delete</button>
          <button className="myButton2" onClick={() => props.history.push(`/edit/${id}`)}>Edit</button></div>
            </div>
          <div>Item: {name}</div>
          <div>Item No. {number}</div> 
          <div>Price: ${price}.00</div>
          <div>Description: {descrip}</div>
        </center>
        </div>
    )
}

export default Part;