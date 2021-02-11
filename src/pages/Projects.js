import Footer from 'components/Footer';
import React, { Component } from 'react';
import Header from '../components/Header';

export default class Projects extends Component {
    render() {
        return (
            <section className="full">
                <div className="container projects-con">
                    <Header page={'projects'} />
                    <div>
                        Under Construction. In the mean time you can check out my{' '}
                        <a href="https://github.com/farhan-mohammed">GitHub</a>
                    </div>
                </div>
                <Footer />
            </section>
        );
    }
}
