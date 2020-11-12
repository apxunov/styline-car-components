import React from 'react'
import './Car.css'
import Radium from 'radium' //high-order component для манипуляций со стилями

const Car = props => {

  const inputClasses = ['input']
  if (props.name !== '') {
    inputClasses.push('green')
  } else {
    inputClasses.push('red')
  } 
  if (props.name.length > 4) {
    inputClasses.push('bold')
  }
  const style = {
    border: '1px solid rgba(0,0,0,0.05)',
    boxShadow: '0 4px 5px 0 rgba(0,0,0,0.1)',
    ':hover': {
      border: '1px solid #aaa',
      boxShadow: '0 4px 15px 0 rgba(0,0,0,0.1)',
      cursor: 'pointer'
    }
  }
  return (
  <div className="car_wrapper" style={style}>
    <h3>Сar name: {props.name}</h3>
    <p>Year: <strong>{props.year}</strong></p>
    <input 
      type="text" 
      value={props.name} 
      className={inputClasses.join(' ')} // так элементы массива пойдут через пробел, образуясь в строчку (чтобы получить строку из нескольких классов)
      onChange={props.onChangeName}
      />
    <button onClick={props.onDelete}>Delete</button>
  </div>
  )
}

export default Radium(Car) //оборачиваем компонент в функционал пакета Radium