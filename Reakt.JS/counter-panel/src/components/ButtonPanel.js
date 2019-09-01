import React, {Component} from 'react';
import './ButtonsPanel.css';


class ButtonsPanel extends Component {
    constructor(props) {
        super(props);
    }

    counterIncrement = () => {
        this.props.increment();
    }
    counterReset = () => {
        this.props.reset();
    }
    
    render() {
        return (
            <div className='button-panel'>
                <button onClick={this.counterIncrement}>Zwiększ o 1</button>
                <button onClick={this.counterReset}>Resetuj licznik</button>
            </div>
        )
    }
}

export default ButtonsPanel;