import React from 'react'
import ReactDOM from "react-dom";
import './Timer.css';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elapsedTime: null,
      elapsedSeconds: 0,
      elapsedMins: 0
    };

    this.countUp = this.countUp.bind(this);
    this.startCounting = this.startCounting.bind(this);

    this.startCounting();
  }

  startCounting() {
    setInterval(this.countUp, 1000);
  }

  countUp() {
    this.setState(({ elapsedTime }) => ({ elapsedTime: elapsedTime + 1 }));
    if(this.state.elapsedSeconds < 59){
      this.setState(({ elapsedSeconds }) => ({ elapsedSeconds: elapsedSeconds + 1 }));
    }else{
      this.setState(({ elapsedSeconds }) => ({ elapsedSeconds: 0}));
      this.setState(({ elapsedMins }) => ({ elapsedMins: elapsedMins + 1 }));
    }
  }

  render() {
    return (
      <div className="timer-box">
        <div>{this.state.elapsedMins}:{this.state.elapsedSeconds < 10 ?  `0${this.state.elapsedSeconds}` : this.state.elapsedSeconds}</div>
      </div>
    );
  }
}

export default Timer;