import Footer from 'components/Footer';
import React, { Component } from 'react';
import Header from '../components/Header';

export default class Achivements extends Component {
    render() {
        const awards = [
            {
                hackathon: 'Hack the North',
                award: 'Best Health Application',
                ranking: (
                    <span>
                        1<sup>st</sup>/320
                    </span>
                ),
                year: 2019,
                href: '',
            },
            {
                hackathon: 'Deltahacks VI',
                award: 'Best use of Machine Learning',
                ranking: (
                    <span>
                        2<sup>nd</sup>/158
                    </span>
                ),
                year: 2020,
                href: 'https://devpost.com/software/trash-code',
                href: '',
            },
            {
                hackathon: 'Brickhacks VI',
                award: 'Best use of MongoDB',
                ranking: (
                    <span>
                        1<sup>st</sup>/107
                    </span>
                ),
                year: 2020,
                href: 'https://devpost.com/software/goceries',
                href: '',
            },
            {
                hackathon: 'Winhacks',
                award: `People's Choice Award`,
                ranking: (
                    <span>
                        2<sup>nd</sup>/72
                    </span>
                ),
                year: 2020,
                href: 'https://devpost.com/software/corona-sef1yh',
                href: '',
            },
            {
                hackathon: 'Earthxhacks',
                award: `Top 10 overall`,
                ranking: (
                    <span>
                        10<sup>th</sup>/170
                    </span>
                ),
                year: 2020,
                href: '',
            },
            {
                hackathon: 'Hack the North',
                award: `CANSOFCAM Challenge`,
                ranking: (
                    <span>
                        1<sup>st</sup>/600
                    </span>
                ),
                year: 2021,
                href: '',
            },
        ];
        function renderYearWins(year) {
            return (
                <div className="awards-bar__yearWins">
                    <div className="awards-bar__year">{year}</div>
                    {awards
                        .filter(({ year: y }) => y === year)
                        .map(({ hackathon, award, ranking, year }) => {
                            return (
                                <div className="awards-bar__hackathon">
                                    <div className="awards-bar__hackathonO"></div>
                                    <h3> {hackathon}</h3>
                                    <div className="awards-bar__hackathonDescp">{award}</div>
                                    <div className="awards-bar__hackathonDescp">{ranking}</div>
                                </div>
                            );
                        })}
                </div>
            );
        }
        return (
            <section className="full">
                <div className="container ">
                    <Header page={'awards'} />
                    <div className="awards-con">
                        <h2 className="awards-title">Awards & Achievements</h2>
                        <div className="awards-text">
                            <div className="awards-bar__con">
                                <div className="awards-bar__bar"></div>
                                <div className="awards-bar__section">
                                    {renderYearWins(2021)}
                                    {renderYearWins(2020)}
                                    {renderYearWins(2019)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </section>
        );
    }
}
