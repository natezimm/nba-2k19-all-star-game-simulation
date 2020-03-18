import React, { Component } from 'react';
import Team from './Team';
import './Game.css';

class Game extends Component {
    static defaultProps = {
        players : [
            { firstName: 'Kyrie', lastName: 'Irving', position: 'G', team: 'Boston Celtics', rating: 93},
            { firstName: 'DeMar', lastName: 'DeRozan', position: 'G', team: 'Toronto Raptors', rating: 89},
            { firstName: 'LeBron', lastName: 'James', position: 'F', team: 'Cleveland Cavaliers', rating: 98},
            { firstName: 'Joel', lastName: 'Embiid', position: 'C', team: 'Philadelphia 76ers', rating: 90},
            { firstName: 'Giannis', lastName: 'Antetokounmpo', position: 'F/G', team: 'Milwaukee Bucks', rating: 94},
            { firstName: 'Bradley', lastName: 'Beal', position: 'G', team: 'Washington Wizards', rating: 87},
            { firstName: 'Goran', lastName: 'Dragic', position: 'G', team: 'Miami Heat', rating: 84},
            { firstName: 'Al', lastName: 'Horford', position: 'C/F', team: 'Boston Celtics', rating: 86},
            { firstName: 'Kevin', lastName: 'Love', position: 'F/C', team: 'Cleveland Cavaliers', rating: 86},
            { firstName: 'Kyle', lastName: 'Lowry', position: 'G', team: 'Toronto Raptors', rating: 85},
            { firstName: 'Victor', lastName: 'Oladipo', position: 'G', team: 'Indiana Pacers', rating: 88},
            { firstName: 'Kristaps', lastName: 'Porzingis', position: 'F/C', team: 'New York Knicks', rating: 88},
            { firstName: 'John', lastName: 'Wall', position: 'G', team: 'Washington Wizards', rating: 89},
            { firstName: 'Andre', lastName: 'Drummond', position: 'C', team: 'Detroit Pistons', rating: 87},
            { firstName: 'Kemba', lastName: 'Walker', position: 'G', team: 'Charlotte Hornets', rating: 86},
            { firstName: 'Stephen', lastName: 'Curry', position: 'G', team: 'Golden State Warriors', rating: 95},
            { firstName: 'James', lastName: 'Harden', position: 'G', team: 'Houston Rockets', rating: 96},
            { firstName: 'Kevin', lastName: 'Durant', position: 'F', team: 'Golden State Warriors', rating: 97},
            { firstName: 'DeMarcus', lastName: 'Cousins', position: 'C', team: 'New Orleans Pelicans', rating: 90},
            { firstName: 'Anthony', lastName: 'Davis', position: 'F/C', team: 'New Orleans Pelicans', rating: 94},
            { firstName: 'Russell', lastName: 'Westbrook', position: 'G', team: 'Oklahoma City Thunder', rating: 93},
            { firstName: 'Damian', lastName: 'Lillard', position: 'G', team: 'Portland Trail Blazers', rating: 90},
            { firstName: 'Draymond', lastName: 'Green', position: 'F', team: 'Golden State Warriors', rating: 87},
            { firstName: 'Karl-Anthony', lastName: 'Towns', position: 'C', team: 'Minnesota Timberwolves', rating: 91},
            { firstName: 'LaMarcus', lastName: 'Aldridge', position: 'F/C', team: 'San Antonio Spurs', rating: 88},
            { firstName: 'Klay', lastName: 'Thompson', position: 'G', team: 'Golden State Warriors', rating: 89},
            { firstName: 'Jimmy', lastName: 'Butler', position: 'G/F', team: 'Minnesota Timberwolves', rating: 89},
            { firstName: 'Paul', lastName: 'George', position: 'F', team: 'Oklahoma City Thunder', rating: 89}
        ]
    };
    render() {
        let eastName = "East All Stars";
        let westName = "West All Stars";
        let players = [...this.props.players];
        let eastTeam1 = [];
        let eastTeam2 = players.slice(0,15);
        let westTeam1 = [];
        let westTeam2 = players.slice(15,28);
        while(eastTeam1.length < 5){
            let randEastIndex = Math.floor(Math.random() * eastTeam2.length);
            let randEastPlayer = eastTeam2.splice(randEastIndex, 1)[0];
            eastTeam1.push(randEastPlayer);
        }
        while(westTeam1.length < 5){
            let randWestIndex = Math.floor(Math.random() * westTeam2.length);
            let randWestPlayer = westTeam2.splice(randWestIndex, 1)[0];
            westTeam1.push(randWestPlayer);
        } 
        let rating1 = eastTeam1.reduce((rating, players) => rating + players.rating, 0);
        let rating2 = westTeam1.reduce((rating, players) => rating + players.rating, 0);
        let score1 = Math.floor((rating1 / 5) * 1.5);
        let score2 = Math.floor((rating2 / 5) * 1.5);
        return(
            <div>
                <h1 className="Game-title">NBA 2K19 All Star Game Simulation</h1>
                <Team teamName={eastName} players={eastTeam1} score={score1} isWinner={score1 > score2}/>
                <Team teamName={westName} players={westTeam1} score={score2} isWinner={score2 > score1}/>
            </div>
        );
    }
}

export default Game;