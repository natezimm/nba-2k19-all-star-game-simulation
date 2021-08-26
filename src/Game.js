import React, { Component } from 'react';
import Team from './Team';
import './Game.css';
import allStars from './allStars';

class Game extends Component {
    static defaultProps = {
        players : allStars,
        eastName : "East All Stars",
        westName : "West All Stars"
    }

    render() {        
        let players = [...this.props.players];
        let eastTeam = [];
        let eastTeamSubs = players.slice(0,15);
        let westTeam = [];
        let westTeamSubs = players.slice(15,28);
        while(eastTeam.length < 5){
            let randEastIndex = Math.floor(Math.random() * eastTeamSubs.length);
            let randEastPlayer = eastTeamSubs.splice(randEastIndex, 1)[0];
            eastTeam.push(randEastPlayer);
        }
        while(westTeam.length < 5){
            let randWestIndex = Math.floor(Math.random() * westTeamSubs.length);
            let randWestPlayer = westTeamSubs.splice(randWestIndex, 1)[0];
            westTeam.push(randWestPlayer);
        } 
        let eastRating = eastTeam.reduce((rating, players) => rating + players.rating, 0);
        let westRating = westTeam.reduce((rating, players) => rating + players.rating, 0);
        let eastScore = Math.floor((eastRating / 5) * 1.5);
        let westScore = Math.floor((westRating / 5) * 1.5);

        return(
            <div>
                <h1 className="Game-title">NBA 2K19 All Star Game Simulation</h1>
                <Team teamName={this.props.eastName} players={eastTeam} score={eastScore} isWinner={eastScore > westScore}/>
                <Team teamName={this.props.westName} players={westTeam} score={westScore} isWinner={westScore > eastScore}/>
            </div>
        );
    }
}

export default Game;