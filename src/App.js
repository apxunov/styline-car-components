import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car'

class App extends Component {
  // state должен хранится наверху, в корневом элементе
  state = {
    cars: [
      {name: 'Ford', year: 2018},
      {name: 'Audi', year: 2016},
      {name: 'Mazda', year: 2010}
    ],
    pageTitle: 'React components',
    showCars: false
  }

  toggleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  }

  onChangeName = (newName, carIndex) => {

    const car = this.state.cars[carIndex]
    car.name = newName

    // /*this.state.cars[carIndex] = newName  –– напрямую изменять state мы не можем, поэтому дублируем в новый массив*/
    const cars = [...this.state.cars]
    cars[carIndex].name = newName
    this.setState({cars})

    // совпадают ключ и значение –– можно упростить (выше)
    // this.setState({
    //   cars: cars
    // })
  }

  deleteHandler(carIndex) {
    const cars = this.state.cars.concat() //создаем копию
    cars.splice(carIndex, 1)
    this.setState({cars})
  }


  render() {

    let cars = null
    if (this.state.showCars) {
      cars = this.state.cars.map((car, index) => {
        return (
          <Car
            key={index}
            name={car.name}
            year={car.year}
            // передаем в метод: введеный input и индекс элементы
            onDelete={this.deleteHandler.bind(this, index)} // байндим текущий контекст
            onChangeName={ event => this.onChangeName(event.target.value, index) }
          />
        )
      }) 
    }
    

    return (
      <div className="div-style">
        <h1>{this.state.pageTitle}</h1>

        <button
          onClick={this.toggleCarsHandler}
        >Toggle cars</button>

        <div style={{
          width: '400px',
          margin: 'auto',
          paddingTop: 20 // измеряет в px
        }}>
          {cars}
        </div>
        
      </div>
    );
  }
}

export default App;
