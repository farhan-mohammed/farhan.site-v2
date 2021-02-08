import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import confetti from 'canvas-confetti';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Intro />
                <section className="wide">
                    <div className="container intro">
                        <div className="intro-text">
                            I am currently searching for Software Engineering internships. Out of
                            school, I am take part in a few developer communities such as RU Hacks,
                            Ryerson Developer Student Club and Ryerson Programming Club.
                        </div>
                    </div>
                </section>
                <section className="wide">
                    <div className="container ">
                        <Terminal></Terminal>
                    </div>
                </section>
                <section className="wide">
                    <div className="container web-con">
                        <div className="web-title home-title">Some websites I help build</div>
                        <div className="web-list">
                            <div className="web-list__item">Ruhacks 2021</div>
                            <div className="web-list__item">Google DSC</div>
                            <div className="web-list__item">Cancelled Toronto</div>
                            <div className="web-list__item">Innovation Tank</div>
                            <div className="web-list__item">Freeze Frame</div>
                        </div>
                    </div>
                </section>
                <section className="wide">
                    <div className="container">
                        <div className="cko-title home-title"> You should check out my</div>
                        <div className="cko-con">
                            <Link className="cko-item" to="/plants">
                                <div className="cko-item__text">plants</div>
                                <div className="cko-item__image"></div>
                            </Link>
                            <Link className="cko-item" to="/projects">
                                <div className="cko-item__text">projects</div>
                                <div className="cko-item__image"></div>
                            </Link>
                            <Link className="cko-item" to="/awards">
                                <div className="cko-item__text">awards</div>
                                <div className="cko-item__image"></div>
                            </Link>
                        </div>
                    </div>
                </section>
                <section className="wide">
                    <div className="container intro">
                        <div className="intro-text">hello</div>
                    </div>
                </section>
                <footer>
                    <div>Linkedin</div>
                    <div>GitHub</div>
                    <div>Devpost</div>
                    <div>Resume</div>
                </footer>
            </div>
        );
    }
}
class Intro extends Component {
    renderConfetti(e) {
        function r(mi, ma) {
            return parseInt(Math.random() * (ma - mi) + mi);
        }

        const direction = Math.sign(r(-6, 6));
        const particleCount = r(122, 245);
        confetti({
            particleCount,
            angle: r(90, 90 + direction * 30),
            spread: r(45, 80),
            origin: {
                x: e.screenX / window.innerWidth,
                y: e.screenY / window.innerHeight - 0.05,
            },
        });
    }
    render() {
        return (
            <section className="full">
                <div className="container intro">
                    <Header page={'home'} />
                    <div className="intro-text">
                        Hello, I'm{' '}
                        <div className="intro-name" onMouseEnter={this.renderConfetti}>
                            Farhan Mohammed
                        </div>
                        , a Math & Computer Science Student at Ryerson University, who's passionate
                        about design and development.
                    </div>
                </div>
            </section>
        );
    }
}

class Terminal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            close: false,
            full: false,
        };
    }
    render() {
        const Lines = [
            { command: 'name', result: ['Farhan Mohammed'] },
            {
                command: 'university expected_graduation',
                result: ['Ryerson University', 'Spring 2022'],
            },
            {
                command: 'favourite frameworks and libraries',
                result: ['React.js, Express.js, Numpy, Tensorflow'],
            },
            {
                command: 'favourite tools',
                result: ['Git, Netlify'],
            },
            {
                command: 'favourite text editor',
                result: [
                    <a
                        href="https://www.youtube.com/watch?v=gnupOrSEikQ&ab_channel=BenAwad"
                        style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                        VimCode
                    </a>,
                ],
            },
            {
                command: 'favourite languages',
                result: ['Python, JavaScript/TypeScript, Java, C++'],
            },
            {
                command: 'extracurriculars',
                result: [
                    'RUHacks 2021 Organizer',
                    'Ryerson Programming Club',
                    'Ryerson Robotics team',
                    'Developer Studenet Club',
                ],
            },
            {
                command: 'favourite plants',
                result: ['Peppers, Cucumbers, Tomatoes, Lettuce'],
            },
            {
                command: 'favourite games',
                result: ['Valorant, Rocket League'],
            },
        ];
        return (
            <div className={`terminal-con ${this.state.full ? 'terminal-con__full' : ''}`}>
                <div className="terminal-header">
                    <div className="terminal-header__buttons">
                        <div
                            className="terminal-header__button terminal-header__close"
                            onClick={() => alert('Why are you trying to close my terminal!!!!!')}
                        >
                            <i class="close icon"></i>
                        </div>
                        <div
                            className="terminal-header__button terminal-header__minimize"
                            onClick={() => this.setState({ close: !this.state.close })}
                        >
                            <i class="window minimize outline icon"></i>
                        </div>
                        <div
                            className="terminal-header__button terminal-header__fullscreen"
                            onClick={() => this.setState({ full: !this.state.full })}
                        >
                            <i class="expand arrows alternate icon"></i>
                        </div>
                    </div>
                </div>
                <div className={`terminal-body ${this.state.close ? 'terminal-body__closed' : ''}`}>
                    {Lines.map(({ command, result }) => (
                        <div>
                            <div className="terminal-line__command">
                                <span className="terminal-green">farhan@server</span>:
                                <span
                                    className="terminal-purple"
                                    style={{ margin: '0 3px 0 5px', fontSize: '0.9em' }}
                                >
                                    ~ $
                                </span>
                                cat {command}
                            </div>
                            {result.map((x) => (
                                <div className="terminal-line__result">{x}</div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
