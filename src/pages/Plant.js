import React, { Component } from 'react';
import Header from '../components/Header';
import PlantSlider from 'components/PlantSlider';
import Footer from 'components/Footer';

export default class Plants extends Component {
    render() {
        return (
            <section className="full">
                <div className="container plant-con">
                    <Header page={'plants'} />
                    <div className="plant-list">
                        <PlantSlider plants={BellPepperImages} />
                        <PlantSlider plants={TomatoMainImages} />
                        <PlantSlider plants={PepperSeedImages} />
                        <PlantSlider plants={Lettuce} />
                        <PlantSlider plants={Mint} />
                        <PlantSlider plants={Blueberry} />
                        <PlantSlider plants={TomatoSeedImages} />
                        {/* <PlantSlider plants={TomatwoSeed} /> */}
                    </div>
                </div>
                <Footer />
            </section>
        );
    }
}
const BellPepperImages = [
    {
        descp: 'Bell Pepper, starter plant.',
        img: `/plants/2020/bellpeppers/01.jpg`,
    },
    {
        descp: '',
        img: `${process.env.PUBLIC_URL}/plants/2020/bellpeppers/02.jpg`,
    },
    {
        descp: '',
        img: `${process.env.PUBLIC_URL}/plants/2020/bellpeppers/03.jpg`,
    },
    {
        descp: '',
        img: `${process.env.PUBLIC_URL}/plants/2020/bellpeppers/04.jpg`,
    },
    {
        descp: '',
        img: `${process.env.PUBLIC_URL}/plants/2020/bellpeppers/05.jpg`,
    },
    {
        descp: '',
        img: `${process.env.PUBLIC_URL}/plants/2020/bellpeppers/06.jpg`,
    },
    {
        descp: '',
        img: `${process.env.PUBLIC_URL}/plants/2020/bellpeppers/07.jpg`,
    },
    // {
    //     descp: "logo 8",
    //     img: `${process.env.PUBLIC_URL}/plants/2020/bellpeppers/08.jpg`,
    // },
    {
        descp: '',
        img: `${process.env.PUBLIC_URL}/plants/2020/bellpeppers/09.jpg`,
    },
    // {
    //     descp: "logo 10",
    //     img: `${process.env.PUBLIC_URL}/plants/2020/bellpeppers/10.jpg`,
    // },
];
const TomatoMainImages = [
    {
        descp: 'Tomato, Starter Plant.',
        img: `${process.env.PUBLIC_URL}/plants/2020/tomatomain/01.jpg`,
    },
    {
        descp: '',
        img: `${process.env.PUBLIC_URL}/plants/2020/tomatomain/02.jpg`,
    },
    {
        descp: '',
        img: `${process.env.PUBLIC_URL}/plants/2020/tomatomain/03.jpg`,
    },
    {
        descp: '',
        img: `${process.env.PUBLIC_URL}/plants/2020/tomatomain/04.jpg`,
    },
    {
        descp: '',
        img: `${process.env.PUBLIC_URL}/plants/2020/tomatomain/05.jpg`,
    },
    {
        descp: '',
        img: `${process.env.PUBLIC_URL}/plants/2020/tomatomain/06.jpg`,
    },
    // {
    //     descp: "logo 7",
    //     img: `${process.env.PUBLIC_URL}/plants/2020/tomatomain/07.jpg`,
    // },
    {
        descp: '',
        img: `${process.env.PUBLIC_URL}/plants/2020/tomatomain/08.jpg`,
    },
    {
        descp: '',
        img: `${process.env.PUBLIC_URL}/plants/2020/tomatomain/09.jpg`,
    },
];

const TomatoSeedImages = [
    {
        descp: 'Tomato Seedlings',
        img: `${process.env.PUBLIC_URL}/plants/2020/tomatoseeds/01.jpg`,
    },
    {
        descp: '',
        img: `${process.env.PUBLIC_URL}/plants/2020/tomatoseeds/02.jpg`,
    },
    {
        descp: '',
        img: `${process.env.PUBLIC_URL}/plants/2020/tomatoseeds/03.jpg`,
    },
    {
        descp: '',
        img: `${process.env.PUBLIC_URL}/plants/2020/tomatoseeds/04.jpg`,
    },
    {
        descp: 'Transplanted into tiny containers',
        img: `${process.env.PUBLIC_URL}/plants/2020/tomatoseeds/05.jpg`,
    },
    {
        descp: '',
        img: `${process.env.PUBLIC_URL}/plants/2020/tomatoseeds/07.jpg`,
    },
    // {
    //     descp: "logo 9",
    //     img: `${process.env.PUBLIC_URL}/plants/2020/tomatoseeds/09.jpg`,
    // },
    {
        descp: 'baby tomato produce',
        img: `${process.env.PUBLIC_URL}/plants/2020/tomatoseeds/10.jpg`,
    },
    {
        descp: '',
        img: `${process.env.PUBLIC_URL}/plants/2020/tomatoseeds/06.jpg`,
    },
    {
        descp: 'logo 9',
        img: `${process.env.PUBLIC_URL}/plants/2020/tomatoseeds/11.jpg`,
    },
];

const PepperSeedImages = [
    {
        descp: 'Bell Pepper, bought a starter plant.',
        img: `${process.env.PUBLIC_URL}/plants/2020/Pepper/01.jpg`,
    },
    {
        descp: '',
        img: `${process.env.PUBLIC_URL}/plants/2020/Pepper/02.jpg`,
    },
    {
        descp: '',
        img: `${process.env.PUBLIC_URL}/plants/2020/Pepper/03.jpg`,
    },
    // {
    //     descp: "logo 4",
    //     img: `${process.env.PUBLIC_URL}/plants/2020/Pepper/04.jpg`,
    // },
    // {
    //     descp: "logo 5",
    //     img: `${process.env.PUBLIC_URL}/plants/2020/Pepper/05.jpg`,
    // },
    // {
    //     descp: "logo 6",
    //     img: `${process.env.PUBLIC_URL}/plants/2020/Pepper/06.jpg`,
    // },
    {
        descp: '',
        img: `${process.env.PUBLIC_URL}/plants/2020/Pepper/07.jpg`,
    },
    {
        descp: '',
        img: `${process.env.PUBLIC_URL}/plants/2020/Pepper/09.jpg`,
    },
    {
        descp: '',
        img: `${process.env.PUBLIC_URL}/plants/2020/Pepper/10.jpg`,
    },
];

const TomatwoSeed = [
    {
        descp: 'logo 1',
        img: `${process.env.PUBLIC_URL}/plants/2020/2Tomato/01.jpg`,
    },
    {
        descp: 'logo 2',
        img: `${process.env.PUBLIC_URL}/plants/2020/2Tomato/02.jpg`,
    },
    {
        descp: 'logo 3',
        img: `${process.env.PUBLIC_URL}/plants/2020/2Tomato/03.jpg`,
    },
    {
        descp: 'logo 4',
        img: `${process.env.PUBLIC_URL}/plants/2020/2Tomato/04.jpg`,
    },
    {
        descp: 'logo 5',
        img: `${process.env.PUBLIC_URL}/plants/2020/2Tomato/05.jpg`,
    },
    {
        descp: 'logo 6',
        img: `${process.env.PUBLIC_URL}/plants/2020/2Tomato/06.jpg`,
    },
    {
        descp: 'logo 7',
        img: `${process.env.PUBLIC_URL}/plants/2020/2Tomato/07.jpg`,
    },
    {
        descp: 'logo 9',
        img: `${process.env.PUBLIC_URL}/plants/2020/tomatoseeds/08.jpg`,
    },
];

const Blueberry = [
    {
        descp: 'Blueberry, starter plant.',
        img: `${process.env.PUBLIC_URL}/plants/2020/bb/01.jpg`,
    },
    { descp: '', img: `${process.env.PUBLIC_URL}/plants/2020/bb/02.jpg` },
    { descp: '', img: `${process.env.PUBLIC_URL}/plants/2020/bb/03.jpg` },
    { descp: '', img: `${process.env.PUBLIC_URL}/plants/2020/bb/04.jpg` },
    { descp: '', img: `${process.env.PUBLIC_URL}/plants/2020/bb/05.jpg` },
    // { descp: "logo 6", img: `${process.env.PUBLIC_URL}/plants/2020/bb/06.jpg` },
    { descp: '', img: `${process.env.PUBLIC_URL}/plants/2020/bb/07.jpg` },
    { descp: '', img: `${process.env.PUBLIC_URL}/plants/2020/bb/08.jpg` },
];

const Mint = [
    {
        descp: 'Mint, home grown.',
        img: `${process.env.PUBLIC_URL}/plants/2020/Mint/01.jpg`,
    },
    {
        descp: '',
        img: `${process.env.PUBLIC_URL}/plants/2020/Mint/02.jpg`,
    },
    {
        descp: '',
        img: `${process.env.PUBLIC_URL}/plants/2020/Mint/03.jpg`,
    },
    {
        descp: '',
        img: `${process.env.PUBLIC_URL}/plants/2020/Mint/04.jpg`,
    },
    {
        descp: '',
        img: `${process.env.PUBLIC_URL}/plants/2020/Mint/05.jpg`,
    },
    {
        descp: '',
        img: `${process.env.PUBLIC_URL}/plants/2020/Mint/06.jpg`,
    },
];

const Lettuce = [
    {
        descp: 'Lettuce, grown from seeds.',
        img: `${process.env.PUBLIC_URL}/plants/2020/Lettuce/01.jpg`,
    },
    {
        descp: '',
        img: `${process.env.PUBLIC_URL}/plants/2020/Lettuce/02.jpg`,
    },
    {
        descp: '',
        img: `${process.env.PUBLIC_URL}/plants/2020/Lettuce/03.jpg`,
    },
    {
        descp: '',
        img: `${process.env.PUBLIC_URL}/plants/2020/Lettuce/04.jpg`,
    },
    {
        descp: '',
        img: `${process.env.PUBLIC_URL}/plants/2020/Lettuce/05.jpg`,
    },
    {
        descp: '',
        img: `${process.env.PUBLIC_URL}/plants/2020/Lettuce/06.jpg`,
    },
    {
        descp: '',
        img: `${process.env.PUBLIC_URL}/plants/2020/Lettuce/07.jpg`,
    },
];
