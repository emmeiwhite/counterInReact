import React,{Component} from 'react';

export default class Counter extends Component{
    constructor(props){
        super(props);

        // The total application state is couter data

        this.state = {
            counter:0
        }
    }

    incrementCounter =()=>{
        // We must not mutate the state 
        const currentCounterValue = this.state.counter;
        this.setState({
            counter:currentCounterValue+1
        })
    }

    decrementCounter =()=>{
        const currentCounterValue = this.state.counter;
        this.setState({
            counter:currentCounterValue-1
        })
    }


    render(){
        return(
            <div className="App">
                <h2>Simple Counter Example in React</h2>
                <button className="btn btn-primary" onClick={this.incrementCounter}>+</button>
                <span className="counterValue">{this.state.counter}</span>
                <button className="btn btn-primary" onClick={this.decrementCounter}>-</button>
            </div>
        )
    }
}