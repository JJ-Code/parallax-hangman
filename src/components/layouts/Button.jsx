import React from 'react'


const Button = ({ linkto, name, classAdded }) => {
  console.log(classAdded);


  return (
    <div className="row center">
      <a href={linkto} id="download-button" className={`btn-large waves-effect waves-light blue lighten-1 ${classAdded}`}>{name}</a>
    </div>
  )
}

export default Button;