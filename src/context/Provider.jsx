import React from 'react';
import myContext from './MyContext';

class Provider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      signal: {
        color: 'red'
      },
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
    }

    this.changeSignal = this.changeSignal.bind(this);
    this.moveCar = this.moveCar.bind(this);
  }

  changeSignal = (signalColor) => {
    this.setState({
      signal: {
        ...this.state.signal,// this.state.signal
        color: signalColor,
      }
    });
  }

  moveCar = (car, move) => {
    this.setState((state) => ({
      ...state,
      cars: {
        ...this.state.cars, // this.state.cars
        [car]: move,
      }
    }))
  }

  render() {
    const context = {
      ...this.state,
      changeSignal: this.changeSignal,
      moveCar: this.moveCar,
    }

    const { children } = this.props;

    return(
      <myContext.Provider value={ context }>
        { children }
      </myContext.Provider>
    )
  }
}

export default Provider;
