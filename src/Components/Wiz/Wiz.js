import React from 'react'
import { Route } from 'react-router-dom'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'

function Wiz(props) {
  return (
    <div>
      <div>
      <button onClick={()=> props.history.push('/')}>Cancel</button>
    </div>   
      <Route path='/wiz/1' component={Step1} />
      <Route path='/wiz/2' component={Step2} />
      <Route path='/wiz/3' component={Step3} />
    </div>
  )
}

export default Wiz;