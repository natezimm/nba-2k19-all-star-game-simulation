import React, { Component } from 'react';
import './Player.css';
const PLAYER_API = 'https://nba-players.herokuapp.com/players/';

class Player extends Component {
    render() {
        let imgSrc = `${PLAYER_API}${this.props.lastName}/${this.props.firstName}`;
        return (
            <div className="Player">
                <h1 className="Player-title">{this.props.firstName} {this.props.lastName}</h1>
                <div className="Player-image">
                    <img src={imgSrc} alt={this.props.lastName}/>
                </div>
                <div className="Player-data">Position: {this.props.position}</div>
                <div className="Player-data">Team: {this.props.team}</div>
                <div className="Player-data">Rating: {this.props.rating}</div>
            </div>
        )
    }
}

export default Player;