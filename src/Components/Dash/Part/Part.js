import React from 'react';
import './Part.css'

//passing the Dash methods down through props
function Part(props) {
  let {id, name, number, price, img, descrip} = props.part;
    return (
      <div>
        <div>
        <form>
        <h4>PART.JS</h4>
        <h5>Part Name: {name}</h5>
        <h5>Part Number: {number}</h5>
        <h5>Part Price: {price}</h5>
        <h5>Part Image: {img}</h5>
        <h5>Part Description: {descrip}</h5>
        </form>
        </div>
        <button onClick={() => props.deletePart(id)}>Delete</button>
      </div>
    )
}
//Delete button not working
export default Part;