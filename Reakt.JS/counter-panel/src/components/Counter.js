import React, {Component} from 'react';
import Display from './Display';
import './Counter.css';
import ButtonsPanel from './ButtonPanel';


class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            'counterValue': 0
        }
    }

    parentIncrementCounter = () => {
        this.setState((prevState) => {
            return {
                'counterValue': prevState.counterValue + 1
            }
        })
    }

    parentResetCounter = () => {
        this.setState((prevState) => {
            return {
                'counterValue': 0
            }
        })
    }

    render() {
        return (
            <div className='counter-panel'>
                <Display counterValue={this.state.counterValue} />
                <ButtonsPanel increment={this.parentIncrementCounter} reset={this.parentResetCounter} />
            </div>
        )
    }
}

export default Counter;
