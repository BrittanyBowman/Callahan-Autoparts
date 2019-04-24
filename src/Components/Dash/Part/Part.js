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
          
        <form>
          <span>
          <div className='house_img' style={{ backgroundImage: `url('${img}')` }}></div>
        <center>
        <h5>Part Name: {name}</h5>
        <h5>Part Number: {number}</h5>
        <h5>Part Price: {price}</h5>
        <h5>Part Image: {img}</h5>
        <h5>Part Description: {descrip}</h5>
        
        </center>
        </span>
        </form>
        
        </div>
        <center>
          <button onClick={() => props.deletePart(id)}>Delete</button>
        <button>Update</button>
        </center>
      </div>
    )
}
//Need to build Update method and endpoints
//Delete button is now working
export default Part;