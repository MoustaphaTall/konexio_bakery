import React, { Component } from 'react';
import RCSlider from 'rc-slider';

class Slider extends Component {
    render() {
        return (
            <RCSlider
                min={this.props.min}
                max={this.props.max}
                value={this.props.value}
                onChange={this.props.onChange}
            />
        );
    }
}

export default Slider;