import React from 'react'


const Button = ({ onClickClue, linkto, idName, name, classAdded }) => {
  console.log(classAdded);

  return (
    <div className=" col s12 m6">
      <a onClick={onClickClue} href={linkto} id={idName} className={`btn-large waves-effect waves-light blue lighten-1 ${classAdded}`}>{name}</a>
    </div>
  )
}

export default Button;