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
        }, 1000);
    }

    componentDidUpdate(){
        if (this.state.seconds === 60){
            this.setState({seconds: 0})
            this.setState(prevState => ({
                minutes: prevState.minutes + 1
            }))
        };
        if (!this.props.timerOn) {
            clearInterval(this.secondInterval);
            clearInterval(this.minuteInterval);
        };
    }

    stopTimer(e){
        e.preventDefault();
        clearInterval(this.secondInterval);
        clearInterval(this.minuteInterval);
    }

    render() {
        const {minutes, seconds} = this.state;
        let clockMinutes = minutes;
        let clockSeconds = seconds;

        clockMinutes = (clockMinutes < 10) ? `0${clockMinutes}` : clockMinutes;
        clockSeconds = (clockSeconds < 10) ? `0${clockSeconds}` : clockSeconds;
        
        return (
            <div>
                <h1>{clockMinutes}:{clockSeconds}</h1>
                <button onClick={this.stopTimer}>STOP(for testing)</button>
            </div>
        )
    }
}

export default Timer;