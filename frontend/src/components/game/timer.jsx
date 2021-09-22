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

    componentWillUnmount() {
        clearInterval(this.secondInterval);
        clearInterval(this.minuteInterval);
    }

    componentDidUpdate(){
        if (this.state.seconds === 60){
            this.setState({seconds: 0})
            this.setState(prevState => ({
                minutes: prevState.minutes + 1
            }))
        };
        if (!this.props.timerOn) {
            this.props.receiveTime({ minutes: this.state.minutes, seconds: this.state.seconds });
            // this.props.currentUser["completion_time"] = {"time": { minutes: this.state.minutes, seconds: this.state.seconds }, "puzzle_id": this.props.sudokuId};
            // this.props.updateUser({"time": { minutes: this.state.minutes, seconds: this.state.seconds }, "puzzle_id": this.props.sudokuId});
            // this.props.updateSudoku({"time": { minutes: this.state.minutes, seconds: this.state.seconds }, "user": this.props.currentUser, "id":this.props.sudokuId});
            clearInterval(this.secondInterval);
            clearInterval(this.minuteInterval);
        };
    }

    stopTimer(e){
        e.preventDefault();
        this.props.receiveTime({minutes: this.state.minutes, seconds: this.state.seconds});
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