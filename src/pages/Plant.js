import React, { Component } from 'react';
import Header from '../components/Header';

export default class Plants extends Component {
    render() {
        return (
            <section className="full">
                <div className="container awards-con">
                    <Header page={'plants'} />
                    <div className="awards-title home-title">Awards & Achivements</div>
                    <div className="awards-text">
                        <div className="awards-bar__con">
                            <div className="awards-bar__bar"></div>
                            <div className="awards-bar__section"></div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
