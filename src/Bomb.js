// your Bomb code here!
import { Component } from 'react';
 

class Bomb extends Component {
    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
      }
    render() { 
        if(this.state.secondsLeft !== 0){
                return (
                    // `< ${this.state.secondsLeft} seconds left before I go boom!`
                    `${this.state.secondsLeft} seconds left before I go boom!`
                    );
            } else {
                return "Boom!"
            }
    }
}
 
export default Bomb;