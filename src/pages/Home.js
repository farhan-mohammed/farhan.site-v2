import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import confetti from "canvas-confetti";
import Projects from "./Projects";

import FrameFreezeLogo from "../media/logos/framefreeze";
export default class Home extends Component {
    render() {
        return (
            <div>
                <Intro />
                <section className="wide">
                    <div className="container intro">
                        <div className="intro-text">
                            In my free time, I like to work on side projects to
                            learning new and hopefully make something I or
                            someone would actually use. I also like to garden
                            and grow vegetable plants, there's just something
                            about taking care of a plant that makes so worth
                            while.<br></br>
                            <br></br> I am currently searching for Software
                            Engineering internships.
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
                        <div className="home-title">
                            Some websites I helped build
                        </div>
                        <DemoProjects />
                    </div>
                </section>
                <section className="wide">
                    <div className="container">
                        <div className="cko-title home-title">
                            {" "}
                            You should check out my
                        </div>
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
                    <a href="https://www.linkedin.com/in/farhanhmd/">
                        Linkedin
                    </a>
                    <a href="https://github.com/farhan-mohammed">GitHub</a>
                    <a href="https://devpost.com/farhanhm12">Devpost</a>
                    <a href="./resume.pdf">Resume</a>
                </footer>
            </div>
        );
    }
}
// https://cdn.logo.com/hotlink-ok/logo-social-sq.png

class DemoProjects extends Component {
    projects_21 = [
        {
            name: "RU Hacks",
            year: 2021,
            link: "",
            logo: "https://cdn.logo.com/hotlink-ok/logo-social-sq.png",
        },
        {
            name: "Ryerson DSC",
            year: 2021,
            link: "",
            logo: "https://cdn.logo.com/hotlink-ok/logo-social-sq.png",
        },
    ];
    projects_20 = [
        {
            name: "Innovation Tank",
            year: 2020,
            link: "https://innovationtank.ca/",
            logo: "https://innovationtank.ca/logo.png",
        },
        {
            name: "Cancelled Toronto",
            year: 2020,
            link: "https://cancelledtoronto.ca/",
            logo: "https://cancelledtoronto.ca/images/header/narrow.png",
        },
    ];
    projects_19 = [
        {
            name: "Freeze Frame",
            year: 2019,
            link: "https://farhan-mohammed.github.io/FrameFreeze/",
            logo: FrameFreezeLogo,
        },
    ];
    renderProject = ({ name, year, link, logo }) => {
        return (
            <a className="home-project" href={link}>
                <div className="home-project__imagecon">
                    <img
                        src={logo}
                        alt={name}
                        className="home-project__image"
                    />
                </div>
                <div className="home-project__text">{name}</div>
            </a>
        );
    };
    render() {
        return (
            <div className="home-project__con">
                <div className="home-project__year">2021</div>
                {this.projects_21.map((p) => this.renderProject(p))}
                <div className="home-project__year">2020</div>
                {this.projects_20.map((p) => this.renderProject(p))}
                <div className="home-project__year">2019</div>
                {this.projects_19.map((p) => this.renderProject(p))}
            </div>
        );
    }
}
class Intro extends Component {
    constructor(props) {
        super(props);
        this.state = { confetti: true };
    }
    renderConfetti = (e) => {
        function r(mi, ma) {
            return parseInt(Math.random() * (ma - mi) + mi);
        }
        if (this.state.confetti) {
            const direction = Math.sign(r(-6, 6));
            const particleCount = r(2, 15);
            console.log(e);
            console.log("w", window.innerWidth);
            confetti({
                particleCount,
                angle: r(30, 150),
                spread: r(45, 80),
                startVelocity: 70,
                gravity: 1,
                origin: {
                    x: e.pageX / window.innerWidth,
                    y: e.pageY / window.innerHeight,
                },
            });
            // this.setState({ confetti: false });
            // setTimeout(() => {
            //     this.setState({ confetti: true });
            // }, 50);
        }
    };

    clickConfetti = (e) => {
        function r(mi, ma) {
            return parseInt(Math.random() * (ma - mi) + mi);
        }
        const direction = Math.sign(r(-6, 6));
        const particleCount = r(122, 150);
        confetti({
            particleCount,
            angle: r(30, 150),
            ticks: 400,
            spread: r(45, 120),
            gravity: -0.5,
            startVelocity: 40,
            origin: {
                x: e.pageX / window.innerWidth,
                y: e.pageY / window.innerHeight,
            },
            disableForReducedMotion: true,
        });
    };
    render() {
        return (
            <section className="full">
                <div className="container intro">
                    <Header page={"home"} />
                    <div className="intro-text">
                        Hello, I'm{" "}
                        <div
                            className="intro-name"
                            onMouseMove={this.renderConfetti}
                            onClick={this.clickConfetti}
                        >
                            Farhan Mohammed 🎉
                        </div>
                        , a Math & Computer Science Student at Ryerson
                        University, who's passionate about design and
                        development.
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
            { command: "name", result: ["Farhan Mohammed"] },
            {
                command: "university expected_graduation",
                result: ["Ryerson University", "Spring 2022"],
            },
            {
                command: "favourite_frameworks_and_libraries",
                result: ["React.js, Express.js, Numpy, Tensorflow"],
            },
            {
                command: "favouritE_tools",
                result: ["Git, Netlify"],
            },
            {
                command: "favourite_text_editor",
                result: [
                    <a
                        href="https://www.youtube.com/watch?v=gnupOrSEikQ&ab_channel=BenAwad"
                        style={{ textDecoration: "none", color: "inherit" }}
                    >
                        VimCode
                    </a>,
                ],
            },
            {
                command: "favourite_languages",
                result: ["Python, JavaScript/TypeScript, Java, C++"],
            },
            {
                command: "extracurriculars",
                result: [
                    "RUHacks 2021 Organizer",
                    "Ryerson Programming Club",
                    "Ryerson Robotics team",
                    "Developer Studenet Club",
                ],
            },
            {
                command: "favourite_plants",
                result: ["Peppers, Cucumbers, Tomatoes, Lettuce"],
            },
            {
                command: "favourite_games",
                result: ["Valorant, Rocket League"],
            },
        ];
        return (
            <div
                className={`terminal-con ${
                    this.state.full ? "terminal-con__full" : ""
                }`}
            >
                <div className="terminal-header">
                    <div className="terminal-header__buttons">
                        <div
                            className="terminal-header__button terminal-header__close"
                            onClick={() =>
                                alert(
                                    "Why are you trying to close my terminal!!!!!"
                                )
                            }
                        >
                            <i class="close icon"></i>
                        </div>
                        <div
                            className="terminal-header__button terminal-header__minimize"
                            onClick={() =>
                                this.setState({ close: !this.state.close })
                            }
                        >
                            <i class="window minimize outline icon"></i>
                        </div>
                        <div
                            className="terminal-header__button terminal-header__fullscreen"
                            onClick={() =>
                                this.setState({ full: !this.state.full })
                            }
                        >
                            <i class="expand arrows alternate icon"></i>
                        </div>
                    </div>
                </div>
                <div
                    className={`terminal-body ${
                        this.state.close ? "terminal-body__closed" : ""
                    }`}
                >
                    {Lines.map(({ command, result }) => (
                        <div>
                            <div className="terminal-line__command">
                                <span className="terminal-green">
                                    farhan@server
                                </span>
                                :
                                <span
                                    className="terminal-purple"
                                    style={{
                                        margin: "0 3px 0 5px",
                                        fontSize: "0.9em",
                                    }}
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
