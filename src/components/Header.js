import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <nav className="header">
                <Link className={this.props.page === 'home' ? 'header-active' : ''} to="/">
                    home
                </Link>
                <Link
                    className={this.props.page === 'projects' ? 'header-active' : ''}
                    to="/projects"
                >
                    projects
                </Link>
                <Link className={this.props.page === 'plants' ? 'header-active' : ''} to="/plants">
                    plants
                </Link>
                <Link className={this.props.page === 'awards' ? 'header-active' : ''} to="/awards">
                    awards
                </Link>
            </nav>
        );
    }
}
