import React from 'react';

class Timer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            minutes: 0,
            seconds: 0
        }
        this.stopTimer = this.stopTimer.bind(this);
    }

    componentDidMount() {
        this.secondInterval = setInterval(() => {
            this.setState(prevState => ({
                seconds: prevState.seconds + 1
            }))
        }, 1000)
        // this.minuteInterval = setInterval()
    }

    stopTimer(e){
        e.preventDefault();
        clearInterval(this.secondInterval)
    }

    render() {
        const {seconds} = this.state;
        return (
            <div>
                <h1>{seconds}</h1>
                <button onClick={this.stopTimer}>STOP(for testing)</button>
            </div>
        )
    }
}

export default Timer;