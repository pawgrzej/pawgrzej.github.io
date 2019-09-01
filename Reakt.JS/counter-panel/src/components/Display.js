import React, {Component} from 'react';


class Display extends Component {
    constructor (props) {
        super(props); 
    }

    render() {
        return(
        
            <div clasName='display'>
                Stan Licznika to:
                <span ClassName='display=val'>{this.props.counterValue}</span>
            </div>
        )
    }
}

export default Display; 
