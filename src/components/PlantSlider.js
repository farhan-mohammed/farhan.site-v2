import React, { Component } from 'react';
export default class PlantSlider extends Component {
    constructor(props) {
        super(props);
        this.state = { c: 0 };
    }
    render() {
        let { plants } = this.props;
        let tt = require('media/plants/2020/bellpeppers/01.jpg');
        return (
            <div className="ps-con">
                <div
                    className="ps-arrowL"
                    onClick={() => {
                        let newc = this.state.c - 1;
                        if (newc < 0) newc = 0;
                        this.setState({ c: newc });
                    }}
                >
                    ⬅️
                </div>
                <div className="ps-images" style={{ right: this.state.c * 300 }}>
                    {plants.map(({ descp, img }) => {
                        return (
                            <div
                                className="ps-image"
                                style={{ backgroundImage: `url(${img.default})` }}
                            />
                        );
                    })}
                </div>
                <div
                    className="ps-arrowR"
                    onClick={() => {
                        let newc = this.state.c + 1;
                        if (newc >= plants.length) newc = plants.length - 1;
                        this.setState({ c: newc });
                    }}
                >
                    ➡️
                </div>
                <div className="ps-text">{plants[this.state.c].descp} </div>
            </div>
        );
    }
}
