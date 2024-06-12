import React from 'react'
import './feature.css'


// Feature component will have two props or properties, Title and text that will be pass through when used in other components or containers
const Feature = ({ title, text }) => {
  return (
    <div className="gpt3__features-container__feature">
      <div className="gpt3__features-container__feature-title">
        <div /> {/* Empty Div to be used to create a gradient bar just above the heading element h1 */}
        <h1>{title}</h1> 
      </div>
      <div className="gpt3__features-container__feature-text">
        <p>{text}</p>
      </div>

    </div>
  )
}

export default Feature