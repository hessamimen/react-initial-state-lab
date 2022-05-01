// your ImageSlider code here!
import { Component } from 'react';

class ImageSlider extends Component {
    state = { 
        currentSlideIndex: 0
     } 
    render() { 
        return (
            `I am on slide ${this.state.currentSlideIndex}`
        );
    }
}
 
export default ImageSlider;