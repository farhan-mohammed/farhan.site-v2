import React, { Component } from 'react';
import Header from '../components/Header';
import PlantSlider from 'components/PlantSlider';

export default class Plants extends Component {
    render() {
        return (
            <section className="full">
                <div className="container plant-con">
                    <Header page={'plants'} />
                    <div>plant slider man</div>
                    <div className="plant-list">
                        <PlantSlider plants={BellPepperImages} />
                        <PlantSlider plants={BellPepperImages} />
                        <PlantSlider plants={BellPepperImages} />
                        <PlantSlider plants={BellPepperImages} />
                    </div>
                </div>
            </section>
        );
    }
}
const BellPepperImages = [
    { descp: 'logo 1', img: require('../media/plants/2020/bellpeppers/01.jpg') },
    { descp: 'logo 2', img: require('../media/plants/2020/bellpeppers/02.jpg') },
    { descp: 'logo 3', img: require('../media/plants/2020/bellpeppers/03.jpg') },
    { descp: 'logo 4', img: require('../media/plants/2020/bellpeppers/04.jpg') },
    { descp: 'logo 5', img: require('../media/plants/2020/bellpeppers/05.jpg') },
    { descp: 'logo 6', img: require('../media/plants/2020/bellpeppers/06.jpg') },
    { descp: 'logo 7', img: require('../media/plants/2020/bellpeppers/07.jpg') },
    { descp: 'logo 8', img: require('../media/plants/2020/bellpeppers/08.jpg') },
    { descp: 'logo 9', img: require('../media/plants/2020/bellpeppers/09.jpg') },
    { descp: 'logo 10', img: require('../media/plants/2020/bellpeppers/10.jpg') },
];
